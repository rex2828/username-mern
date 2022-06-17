const express = require('express')
const connectDb = require('./config/db')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const authRoutes = require('./routes/auth')
const path = require('path');

connectDb()
dotenv.config()
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))

app.use(express.json())
app.use('/api',authRoutes)

// deployment
__dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}.`)
})