// const mongoose = require('mongoose');

// const connectDB = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {});
//         console.log("MONGODB Connected")
//     } catch (error) {
//         console.log("Error connecting to MongoDB", error);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;




import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};

export default connectDB;
