const {Schema} = require("mongoose");


const TenantModel = new Schema({
    tenantId:{
        type:String,
        required:true,
        unique:true,
    },
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
