const Express = require("express")
const router = Express.Router()


const createNewBill = require("../Controllers/billControllers/createNewBill")
const getAllBills = require("../Controllers/billControllers/getAllBills");


router.post("/create", createNewBill)
router.get("/all", getAllBills)



module.exports = router
