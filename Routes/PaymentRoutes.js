

const Express = require("express")
const payWaterBill = require("../Controllers/paymentControllers/payWaterBill");
const payGoods = require("../Controllers/paymentControllers/payGoods");
const router = Express.Router()




router.post("/payWaterBill", payWaterBill)
router.post("/payGoods",payGoods)


module.exports = router
