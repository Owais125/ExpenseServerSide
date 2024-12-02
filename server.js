const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDB')

const app = express()

dotenv.config()

// database call
connectDb()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('<h1>Hello from server </h1>')
})
//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transection", require("./routes/transectionRoutes"));


const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is Runing on port ${PORT}`)
})

