const {Schema} = require("mongoose");
const mongoose = require("mongoose");


const HouseModel = new Schema({

    houseNo:{
        type:String,
        required:true,
    },
    meterNo:{
        type:String,
        required:true,
    },
    rentAmount:{
       type:Number,
       required:true,
    },
    currentTenantEmail:{
        type:String,
        default: null
    },
    houseType:{
        type:String,
        required:true,
    }


})

module.exports = mongoose.model("houses",HouseModel)
