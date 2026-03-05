import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorMiddleware.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config();

const app  = express();
app.use(express.json());
app.use(cors());

//global error handler
app.use(errorHandler);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(5000,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    connectDB(); // connect to database
})