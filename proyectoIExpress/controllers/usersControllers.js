const data = require("../db/data")
const db = require("../db/models")
let bcrypt = require ("bcryptjs");
const user = db.Users

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
        let NDD = req.body.NDD
        let FDP = req.body.FDP
        let fecha_nacimiento = req.body.FDN
        let email = req.body.email
        let contra = req.body.password
        let contraEncript = bcrypt.hashSync(contra, 12)
        user.create({
            name: nombre,
            email: email,
            contrasenia: contraEncript,
            fecha: fecha_nacimiento,
            dni: NDD,
            fotoPerfil: FDP,
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
        let recordame = req.body.recordame

        user.findOne({
            where: [{email: emails}]})
        .then(function(resultado){
            if(bcrypt.compareSync(password, resultado.password) == true){
                req.session.usuarioLogeado = resultado;
                
                if (recordame == 'on') {
                    res.cookie('usuario', resultado.email, {maxAge: 1000 * 60 * 30})
                }
                res.redirect('/')
            
            } else{
                res.send('la contrasenia es incorrecta')
            }
            })
    }
}






module.exports = profileController
