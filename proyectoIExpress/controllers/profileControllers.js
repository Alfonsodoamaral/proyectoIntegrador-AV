const data = require("../db/data")

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
    }

}






module.exports = profileController
