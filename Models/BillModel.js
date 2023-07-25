const mongoose = require("mongoose");


const BillModel = new mongoose.Schema({
    meterNo:{
        type:String,
        required:true,
    },
    houseNo:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
    },
    month:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    units:{
        type:String,
        required:true
    },

})


module.exports =  mongoose.model('Bills', BillModel)
