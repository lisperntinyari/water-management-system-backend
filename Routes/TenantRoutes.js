

const Express = require("express")
const router = Express.Router()


const getAllTenants = require("../Controllers/tenantControllers/getAllTenants")
const activateTenant = require("../Controllers/authControllers/activateTenant");


router.get("/all", getAllTenants)
router.post("/activateTenant",activateTenant)


module.exports = router
