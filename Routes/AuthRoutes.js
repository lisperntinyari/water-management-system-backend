const Express = require("express")
const router = Express.Router()


const createAdmin = require("../Controllers/authControllers/createAdmin")
const loginAdmin = require("../Controllers/authControllers/loginAdmin");
const createTenant = require("../Controllers/authControllers/createTenant")
const loginTenant = require("../Controllers/authControllers/loginTenant")

router.post("/createAdmin", createAdmin)
router.post("/loginAdmin", loginAdmin)
router.post("/loginTenant", loginTenant)
router.post("/createTenant", createTenant)


module.exports = router
