const BillModel = require("../../Models/BillModel");


const getAllBills = async (req,res) => {
    try{
        const bills = await BillModel.find({})
        return res.json({
            msg:"All bills fetched successfully",
            success:true,
            bills
        })
    }catch (e){
        console.log("Error fetching bills",e)
        return res.json({
            msg:"An unexpected error occurred",
            success:false,

        })
    }
}

module.exports = getAllBills
