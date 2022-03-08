const mongooose = require('mongoose');

const connectDB = async () => {
    try {
        const conn= await mongooose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    }catch (error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1);

    }
}

module.exports = connectDB;