const mongoose= require("mongoose");


const connectDB = async () => {
    try {
        const RemoteDatabaseURL = process.env.REMOTE_DATABASE_URL
        const LocalDatabaseURL = process.env.LOCAL_DATABASE_URL
        let DatabaseURL = RemoteDatabaseURL;

        const conn = await mongoose.connect(DatabaseURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
        const connection  = mongoose.connection;

        connection.on('connected',() => {
            console.log(`Database connected successfully`)
        })
        connection.on('disconnected',() => {
            console.log("Database disconnected unexpectedly")
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
