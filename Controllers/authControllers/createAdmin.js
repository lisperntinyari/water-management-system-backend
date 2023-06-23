const AdminModel = require("../../Models/AdminModel")
const {hashSync, genSaltSync} = require("bcrypt");



const createAdmin = async (req,res) => {
    try{
        const { name,password,email } = req.body

        const existingUser = await AdminModel.findOne({ email })
        if (existingUser){
            return res.json({
                msg:'An admin with a similar email address  already exists',
                success:false,
            })
        }else {
            const salt = genSaltSync(10)
            const hashpassword = hashSync(password,salt)

            const newUser = await AdminModel.create({
                name:name,
                email:email,
                password:hashpassword,
            })

            return  res.json({
                msg:'New Admin created successfully',
                success:true,
                user:newUser
            })
        }
    }catch (e){
        console.log("Error creating admin",e)
        return res.json({
            msg:'An unexpected error occurred',
            success:false,

        })

    }
}

module.exports = createAdmin
