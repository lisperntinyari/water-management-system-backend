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



const AuthRoute = require('./Routes/AuthRoutes')



app.use('/auth',AuthRoute)


app.get('/',(req,res) => {

})

const PORT = process.env.PORT || 9000
app.listen(PORT,() => console.log(`Server started on Port ${PORT}`))



