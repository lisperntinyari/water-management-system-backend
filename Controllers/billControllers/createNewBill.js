const BillModel = require("../../Models/BillModel")

const createNewBill = async (req,res) => {
    try{
        const { meterNo,houseNo,amount,month,year,status,units } = req.body
        const newBill = await BillModel.create({
            meterNo,
            houseNo,
            amount,
            month,
            year,
            status,
            units
        })
        return res.json({
            msg:"New bill created successfully",
            success:true,
            bill:newBill
        })

    }catch (e){
        console.log("Error creating bills",e)
        return res.json({
            msg:"An unexpected error occurred while creating a bill",
            success:false,

        })
    }
}

module.exports = createNewBill
