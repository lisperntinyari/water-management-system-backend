const Express = require("express")
const router = Express.Router()


const createNewBill = require("../Controllers/billControllers/createNewBill")
const getAllBills = require("../Controllers/billControllers/getAllBills");
const getBillsByHouseNo = require("../Controllers/billControllers/getBillsByHouseNo");


router.post("/create", createNewBill)
router.get("/all", getAllBills)
router.get("/single",getBillsByHouseNo)



module.exports = router
