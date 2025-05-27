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
    search_results: function(req, res){
        let search = req.query.search
        producto.findAll({
            where: {
                nombre_producto: {
                    [op.like]: `%${search}%`
                } }
        })
        .then(function(resultado){
            if(resultado.length > 0){
                res.render("search-results", {
                    productos: resultado
                })
            } else {
                res.render("search-results", {
                    productos: [],
                    mensaje: "No hay resultados para su criterio de busqueda"
                })
            }
        })
        .catch(function(error){
            console.log(error)
            res.render("search-results", {
                productos: [],
                mensaje: "Error al buscar productos"
            })
        })

        
    }
}

module.exports = indexController
