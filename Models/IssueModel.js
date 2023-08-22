const {Schema} = require("mongoose");
const mongoose = require("mongoose");


const IssueModel = new Schema({

    issueName:{
        type:String,
        required:true,
    },
    issueDescription:{
        type:String,
        required:true,
    },
    postedBy:{
        type:String,
        required:true,
    },



})

module.exports = mongoose.model("issues",IssueModel)
