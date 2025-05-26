const data = require("../db/data")
const db = require("../db/models")
let bcrypt = require ("bcryptjs");
const user = db.User

const profileController = {
    index: function(req, res){
        let productos = data.productos
        let usuario = data.usuario
        res.render("profile", {
            usuario: usuario,
            productos: productos

        })
    },
    login: function(req, res){
        res.render("login")
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
                console.log(resultado)
                req.session.usuarioLogeado = "hola";
                if (recordame == 'on') {
                    res.cookie('usuario', resultado.email, {maxAge: 1000 * 60 * 30})
                }
                res.redirect('/users/perfil')
            
            } else{
                res.send('la contrasenia es incorrecta')
            }
            })
    }
}






module.exports = profileController
