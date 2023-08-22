const Express = require('express')

const BodyParser= require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB  = require("./config/dbUtil")
const app = Express()



dotenv.config()

connectDB()
    .then(() => {
        console.log("DB connected")

    })
    .catch((err) => {
        console.log(err)
        console.log("Database not connected")
    })

app.use(cors())

app.use(BodyParser.json({ limit:'100mb' }))



const AuthRoutes = require('./Routes/AuthRoutes')
const TenantRoutes = require('./Routes/TenantRoutes')
const BillRoutes = require('./Routes/BillRoutes')
const HouseRoutes = require('./Routes/HouseRoutes')
const PaymentRoutes = require('./Routes/PaymentRoutes')
const IssueRoutes = require('./Routes/IssueRoutes')



app.use('/auth',AuthRoutes)
app.use('/tenant',TenantRoutes)
app.use('/bills',BillRoutes)
app.use('/houses',HouseRoutes)
app.use("/pay",PaymentRoutes)
app.use("/issue",IssueRoutes)

app.get('/',(req,res) => {
    return res.send("Water management system backend ")
})

const PORT = process.env.PORT || 9000
app.listen(PORT,() => console.log(`Server started on Port ${PORT}`))



