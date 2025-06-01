const data = require("../database/models")
const producto = data.Producto
const op = data.Sequelize.Op


const indexController = {
    index: function(req, res){
        producto.findAll({
            include: [
                {association: "User"},
                {association: "Comentario"}
            ]
        })
        .then(function(productos){
            res.render("index", {
                productos: productos
            })
        })
    },
}

module.exports = indexController
