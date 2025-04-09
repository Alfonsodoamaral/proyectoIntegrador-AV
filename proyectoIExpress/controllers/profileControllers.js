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

module.exports = profileController