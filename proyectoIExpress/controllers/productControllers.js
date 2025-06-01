const data = require("../database/models")
const producto = data.Producto
const op = data.Sequelize.Op

const productController = {
    index: function(req, res){
       let productos = data.productos;
       const index = req.params.id;

       if(productos[index]){
        let producto = productos[index]
        res.render("product", {
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            comentarios: producto.comentarios
        })
       }
    },
    add_products: function(req, res){
        let usuario = data.usuario
        res.render("product-add", {usuario})
    },
    search_results: function(req, res){
        let search = req.query.search
            console.log("Valor de búsqueda:", search); // Aquí se verifica el valor
        if(search == ""){
            return res.render("search-result", {
                productos: [],
                mensaje: "Por favor ingrese un valor correcto"
            })
        }
        producto.findAll({
            where: {
                nombre_producto: {
                    [op.like]: `%${search.toLowerCase()}%`
                } }
        })
        .then(function(resultado){
            if(resultado.length > 0){
                res.render("search-result", {
                    productos: resultado
                })
            } else {
                res.render("search-result", {
                    productos: [],
                    mensaje: "No hay resultados para su criterio de busqueda"
                })
            }
        })
        .catch(function(error){
            console.log(error)
            res.render("search-result", {
                productos: [],
                mensaje: "Error al buscar productos"
            })
        })

        
    }
}


module.exports = productController
