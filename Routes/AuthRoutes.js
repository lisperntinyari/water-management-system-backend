const Express = require("express")
const router = Express.Router()
const loginUser = require("../Controllers/authControllers/loginTenant");

const createAdmin = require("../Controllers/authControllers/createAdmin")
const loginAdmin = require("../Controllers/authControllers/loginAdmin");


router.post("/createAdmin",createAdmin)
router.post("/loginAdmin",loginAdmin)






module.exports = router
