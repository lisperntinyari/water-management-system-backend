const makeMpesaPayment = require("../../config/mpesa");


const payGoods = async (req,res) => {
    try {
        const {  phoneNumber,billAmount} = req.body
        console.log(req.body)
        const response = await makeMpesaPayment(phoneNumber,billAmount)
        return res.json({
            msg:"Success",
            data:response,
        })
    }catch (e){
        return res.json({
            msg:"Error",
            data:e,
        })
    }
}


module.exports = payGoods
