const TenantModel = require("../../Models/TenantModel")
const {genSaltSync, hashSync} = require("bcrypt");


const createTenant = async (req, res) => {
    try {
        const {fullName, email, phoneNumber, houseNo} = req.body
        const existingTenant = await TenantModel.findOne({email: email})
        if (existingTenant) {
            return res.json({
                msg: 'A tenant with a similar email address  already exists',
                success: false,
            })
        } else {
            const newUser = await TenantModel.create({
                fullName,
                phoneNumber,
                houseNo,
                email,
                password:"",
                isActivated:false,
            })

            return res.json({
                msg: 'New Tenant created successfully',
                success: true,
                user: newUser
            })
        }

    } catch (e) {
        console.log(e)
        return res.json({
            msg: 'An unexpected error occurred trying to create a tenant',
            success: false,
        })
    }
}

module.exports = createTenant
