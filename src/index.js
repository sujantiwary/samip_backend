import connectDB from './db/index.js';
import {app} from './app.js';

import dotenv from 'dotenv';
dotenv.config(
    {path: "./.env"});


app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Hello World!");
    
});

connectDB()

.then(()=>{
    app.on('error', (err) => {
        console.error("MongoDB connection error:", err);
        throw err;
    });

    app.listen(process.env.PORT || 5000, () => {

        console.log('process.env.PORT', process.env.PORT);
        
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log("MongoDB connected successfully");
})
.catch(error=>{
    console.log("Error connecting to MongoDB:", error);
})



// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`);

//         app.on('error', (err) => {
//             console.error("MongoDB connection error:", err);
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }
//     catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
        
// })()