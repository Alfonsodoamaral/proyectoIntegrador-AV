const express = require("express")
const route = express.Router()
const searchControllers = require("../controllers/search-resultsControllers")

route.get("/search", searchControllers.index)

module.exports = route