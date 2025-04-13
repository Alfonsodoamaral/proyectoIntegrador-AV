const express = require("express")
const route = express.Router()
const indexControllers = require("../controllers/indexControllers")

route.get("/", indexControllers.index)
route.get("/search", indexControllers.search_results)



module.exports = route