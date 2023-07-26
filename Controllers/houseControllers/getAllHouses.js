const HouseModel = require("../../Models/HouseModel")

const getAllHouses = async (req,res) => {
    try {
        const houses = await HouseModel.find({  })
        return res.json({
            msg:"All houses fetched",
            success:true,
            houses:houses
        })
    }catch (e){
        console.log("An error occurred fetching all houses",e)
        return res.json({
            msg:"An unexpected error occurred",
            success:false,
        })
    }
}

module.exports = getAllHouses
