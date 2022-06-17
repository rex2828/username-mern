const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });
        console.log(`MongoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.error('Database Error');
        process.exit();
    }
}
module.exports = connectDB;