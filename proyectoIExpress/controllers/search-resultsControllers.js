const searchController = {
    index: function(req, res){
        let result = req.query.search;
        res.render("search-result", result)
    }
}

module.exports = searchController