
const db = require("../database/models")
let bcrypt = require ("bcryptjs");
const user = db.User
const product = db.Producto

const profileController = {
    login: function(req, res){
            if(req.session.usuarioLogueado){
                return res.redirect("/users/profile")
            }
            return res.render("login")
    },
    profile: function(req, res){
        if(!req.session.usuarioLogeado){
            return res.redirect('/users/login');
        }
        let userId = req.session.usuarioLogeado.id;

        user.findByPk(userId, {
            include: [
                {
                    association: "Producto", 
                    include: [
                        {
                            association: "Comentario" 
                        }
                    ]
                },
                {
                    association: "Comentario"
                }
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.redirect('/users/login');
            }
            res.render("profile", { usuario: usuario });
        })
    },

    profile_id: function(req, res){
        let usuario_id= req.params.id;
 
 
        user.findByPk(usuario_id, {
            include: [
                {
                    association: "Producto",
                    include: [
                        {
                            association: "Comentario" 
                        }
                    ]
                },
                {
                    association: "Comentario" 
                }
            ]
        })
        .then(function(usuario){
            if(!usuario) {
                return res.send("Usuario no encontrado");
            }
            res.render("profile", { usuario: usuario });
        })
    },
    register: function(req, res){
        res.render("register")
    },
    processRegister: function(req, res){
        let nombre = req.body.username
        let documento = req.body.documento
        let perfil = req.body.perfil
        let fecha_nacimiento = req.body.nacimiento
        let email = req.body.email
        let contra = req.body.password
        let contraEncript = bcrypt.hashSync(contra, 12)
        if (contra.length < 3) {
            return res.send("la contraseña debe tener al menos 3 caracteres.");
        }
        user.findOne({ where: { email: email } })
        .then(function(resultado){
            if (resultado) {
                return res.send("El email ya está registrado." );
            }
        })
        user.create({
            nombre: nombre,
            email: email,
            contrasenia: contraEncript,
            fecha: fecha_nacimiento,
            dni: documento,
            fotoPerfil: perfil,
        })
        .then(function(){
            res.redirect("/")
        })
        .catch(function(error){
            console.log(error)
        })
    },
    processLogin: function(req, res){
        let emails = req.body.email
        let password = req.body.password
        let recordame = req.body.recordarme

        user.findOne({
            where: [{email: emails}]})
        .then(function(resultado){
            if(resultado == undefined){
                return res.send("No se encontro el email")
            }
            if(bcrypt.compareSync(password, resultado.contrasenia) == true){
                
              req.session.usuarioLogeado = {
                id: resultado.id,
                nombre: resultado.nombre,
                email: resultado.email
}
                if (recordame == 'on') {
                    res.cookie('usuario', resultado.email, {maxAge: 1000 * 60 * 30})
                }
                res.redirect('/users/perfil')
            
            } else{
                res.send('la contrasenia es incorrecta')
            }
            })
    },
    processLogout: function(req,res){
            req.session.destroy();
            res.clearCookie("usuario")
            res.redirect("/")
        
    }

}






module.exports = profileController
