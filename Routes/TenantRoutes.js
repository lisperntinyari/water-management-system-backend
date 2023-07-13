

const Express = require("express")
const router = Express.Router()


const getAllTenants = require("../Controllers/tenantControllers/getAllTenants")


router.get("/all", getAllTenants)



module.exports = router
