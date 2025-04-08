const data = require("../db/data")


const indexController = {
    index: function(req, res){
        res.render("index", {
            productos: data.productos
        })
    }
}

module.exports = indexController