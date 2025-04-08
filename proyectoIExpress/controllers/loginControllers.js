const data = require("../db/data")


const loginController = {
    index: function(req, res){
        res.render("login")
    }
}

module.exports = loginController