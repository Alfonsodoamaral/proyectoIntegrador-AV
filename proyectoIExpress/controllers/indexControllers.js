const data = require("../db/data")


const indexController = {
    index: function(req, res){
        res.render("index", {
            productos: data.productos
        })
    },
    search_results: function(req, res){
        res.render("search-result", {productos: data.productos})
    }
}

module.exports = indexController
