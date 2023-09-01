const mongoose = require('mongoose');

async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/tps_rest_movice_api');
        console.log('database connected');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = connectDB;