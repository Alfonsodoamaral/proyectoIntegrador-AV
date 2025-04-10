const data = require("../db/data")


const indexController = {
    index: function(req, res){
        res.render("index", {
            productos: data.productos
        })
    }
}
const searchController = {
    index: function(req, res){
        res.render("search-result")
    }
}

module.exports = indexController
module.exports = searchController