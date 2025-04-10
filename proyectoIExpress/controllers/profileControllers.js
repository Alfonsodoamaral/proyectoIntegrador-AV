const data = require("../db/data")

const profileController = {
    index: function(req, res){
        let productos = data.productos
        let usuario = data.usuario
        res.render("profile", {
            usuario: usuario,
            prodcutos: prodcutos

        })
    }

}

const loginController = {
    index: function(req, res){
        res.render("login")
    }
}

const registerController = {
    index: function(req, res){
        res.render("register")
    }
}


module.exports = profileController
module.exports = registerController
module.exports = loginController