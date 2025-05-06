import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

import { DBName } from '../constants.js';

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);
        
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;