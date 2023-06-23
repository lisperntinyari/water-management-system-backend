const AdminModel = require("../../Models/AdminModel")
const {compareSync} = require("bcrypt");




const loginAdmin = async (req,res) => {
    console.log(req.body)

    const { email,password } = req.body
    try{
        const findUser = await AdminModel.findOne({ email })
        if (findUser ===null){
            return res.json({
                msg:'Wrong credentials',
                success:false
            })

        }else {
            if (compareSync(password,findUser.password)){
                return res.json({
                    msg:'Login Successful',
                    success:true,
                    authType:"admin",
                    user:findUser
                })
            }else {
                return res.json({
                    msg:'Wrong Password',
                    success:false,
                })
            }
        }
    }catch (e) {
        return res.json({
            msg:'An error occurred',
            success:false,
            err:e
        })

    }
}

module.exports = loginAdmin

