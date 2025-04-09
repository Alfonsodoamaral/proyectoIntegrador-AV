const data = require("../db/data")

const productController = {
    index: function(req, res){
       let productos = data.productos;
       const index = req.params.index;

       if(productos[index]){
        let producto = productos[index]
        res.render("product", {
            nombre: producto.nombre,
            descripion: producto.descripcion,
            imagen: producto.imagen,
            comentario: producto.comentario
        })
       }
}
}

module.exports = productController