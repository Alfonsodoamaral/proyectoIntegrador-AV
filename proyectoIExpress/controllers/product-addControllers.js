const data = require("../db/data")

const productAddController = {
    index: function(req, res){
        res.render("product-add")
    }
}

module.exports = productAddController