const TenantModel = require("../../Models/TenantModel");
const {compareSync} = require("bcrypt");


const loginTenant = async (req, res) => {
    const {email, password} = req.body
    try {
        const findUser = await TenantModel.findOne({email})
        if (findUser === null) {
            return res.json({
                msg: 'Wrong credentials',
                success: false
            })

        } else {
            if (compareSync(password, findUser.password)) {
                return res.json({
                    msg: 'Tenant Login Successful',
                    success: true,
                    user: {
                        email: findUser.email,
                        tenantId: findUser._id,
                        phoneNumber:findUser.phoneNumber,
                        fullName:findUser.fullName,
                        houseNo:findUser.houseNo,
                        authType: "tenant",
                    }
                })
            } else {
                return res.json({
                    msg: 'Wrong Tenant Password',
                    success: false,
                })
            }
        }
    } catch (e) {
        return res.json({
            msg: "An unexpected error occurred",
            success: true,
        })

    }
}
module.exports = loginTenant
