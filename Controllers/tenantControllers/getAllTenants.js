const TenantModel = require("../../Models/TenantModel")

const getAllTenants = async (req,res) => {
    try {
        const tenants = await TenantModel.find({})
        return res.json({
            msg:"All Tenants fetched successfully",
            success:true,
            tenants:tenants
        })
    }catch (e){
        return res.json({
            msg:"An error occurred fetching tenants",
            success:false,
        })
    }
}

module.exports = getAllTenants
