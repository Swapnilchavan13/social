require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app= express();
const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected :${conn.connection.host}`)
    } catch (error) {
        console.log("Error")
    }
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});