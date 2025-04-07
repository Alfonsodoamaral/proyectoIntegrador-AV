const express = require('express');
const router = express.Router();
const userController = require("../controllers/userControllers")


router.get("/register", userControllers.register)
router.get("/login", userControllers.login)
router.get("/profile", userController.profile)



module.exports = router;
