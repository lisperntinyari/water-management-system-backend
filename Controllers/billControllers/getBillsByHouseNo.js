const BillModel = require("../../Models/BillModel");
const getBillsByHouseNo = async (req,res) => {
    try{
        const { houseNo } = req.query
        const bills = await BillModel.find({ houseNo:houseNo })
        return res.json({
            msg:`Bills for House No. ${houseNo} have been fetched successfully`,
            success:true,
            bills:bills,
        })
    }catch (e){
        console.log("An error occurred trying to fetch a bills by house No.".e)
        return res.json({
            msg:`An unexpected error occurred`,
            success:true,
        })
    }
}


module.exports = getBillsByHouseNo
