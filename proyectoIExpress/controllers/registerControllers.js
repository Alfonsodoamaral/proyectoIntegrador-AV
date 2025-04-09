const data = require("../db/data")

const registerController = {
    index: function(req, res){
        res.render("register")
    }
}

module.exports = registerController