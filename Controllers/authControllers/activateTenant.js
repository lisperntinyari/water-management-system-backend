const TenantModel = require("./../../Models/TenantModel")
const {genSaltSync, hashSync} = require("bcrypt");

const activateTenant = async (req,res) => {
    try{
        const { email,password } = req.body
        const existingTenant = await TenantModel.find({ email:email })
        if (existingTenant.length === 0){
            return res.json({
                msg:"No such tenant has been registered in the system. Please contact your landlord",
                success:false,
            })
        } else {
            const tenant = await TenantModel.findOne({ email })
            if (tenant.isActivated){
                return res.json({
                    msg:"You have already activated your account",
                    success:false,
                })
            }else {
                const salt = genSaltSync(10)
                const hashpassword = hashSync(password,salt)
                await TenantModel.findOneAndUpdate({ email },{ isActivated:true,password:hashpassword, })
                return res.json({
                    msg:"Request Successful",
                    success:true,

                })
            }
        }
    }catch (e){
        console.log("An error occurred trying to activate a tenant",e)
        return res.json({
            msg:"An unexpected error occurred trying to activate your account",
            success:false,
        })
    }
}

module.exports = activateTenant
