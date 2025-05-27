

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
    }
}


module.exports = productController
