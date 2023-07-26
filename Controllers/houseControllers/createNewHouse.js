const HouseModel = require("../../Models/HouseModel");


const createNewHouse = async (req,res) => {
    try{
        const { houseNo,rentAmount,houseType,meterNo } = req.body
        const existingHouse = await HouseModel.find({ houseNo: houseNo })


        if (existingHouse.length > 0){
            return res.json({
                msg:"An existing House No already exists",
                success:false,

            })
        }else {
            const newHouse = await HouseModel.create({
                houseNo,rentAmount,houseType,meterNo
            })
            return res.json({
                msg:"New house created successfully",
                success:true,
                house:newHouse
            })
        }

    }catch (e){
        console.log("An unexpected error occurred creating a house",e)

    }

}

module.exports = createNewHouse
