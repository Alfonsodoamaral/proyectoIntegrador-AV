const data = require("../database/models")
const producto = data.Producto
const op = data.Sequelize.Op

const productController = {
    index: function(req, res){
        let id = req.params.id;
        producto.findByPk(id, {
            include: [
                {
                    association: "Comentario", 
                    include: [
                        {
                            association: "User" 
                        }
                    ]
                },
                {
                    association: "User"
                }
            ]
        })
        .then(function(producto){
            
        if(!producto) {
            return res.redirect('/'); 
        }
        if(!req.session.usuarioLogeado){
            return res.redirect('/'); 
        }
        res.render("product", { producto: producto });
    })
    },
    add_products: function(req, res){
        let usuario = data.usuario
        res.render("product-add", {usuario})
    },
    nuevo_producto: function(req, res){
        producto.create({
            nombre_foto_producto: req.body.image,
            nombre_producto: req.body.nombre_producto, 
            descripcion_producto: req.body.descripcion_producto,
            usuario_id: req.session.usuarioLogeado.id
        })
        .then(function(producto){
            return res.redirect('/users/perfil'); 
        })
    },
    search_results: function(req, res){
        let search = req.query.search
        if(search == ""){
            return res.render("search-result", {
                productos: [],
                mensaje: "Por favor ingrese un valor correcto"
            })
        };
        producto.findAll({
            where: {
                nombre_producto: {
                    [op.like]: `%${search.toLowerCase()}%`
                } },
            include: [
                {
                    association: "Comentario", 
                    include: [
                        {
                            association: "User" 
                        }
                    ]
                },
                {
                    association: "User"
                }
            ]
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
module.exports = productController;