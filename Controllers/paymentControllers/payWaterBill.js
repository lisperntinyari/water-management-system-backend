const makeMpesaPayment = require("../../config/mpesa");


const payWaterBill = async (req,res) => {
    try {
        const {  phoneNumber,billAmount} = req.body
        console.log(req.body)
        const response = await makeMpesaPayment(phoneNumber,billAmount)
        return res.json({
            msg:"Payment Initiated",
            success:true,
            data:response,
        })
    }catch (e){
        return res.json({
            msg:"Error",
            success:false,
            data:e,
        })
    }
}


module.exports = payWaterBill
