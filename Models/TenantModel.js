const {Schema} = require("mongoose");
const mongoose = require("mongoose");


const TenantModel = new Schema({

    fullName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    houseNo:{
        type:String,

    },
    email:{
        type:String,

    },
    password:{
        type:String,

    },
    isActivated:{
        type:Boolean,
        required:true,
        default:false,
    }

})

module.exports = mongoose.model("tenants",TenantModel)
