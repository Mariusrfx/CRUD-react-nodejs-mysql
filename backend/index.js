import express from "express";
import {PORT} from './config.js';
import bookRoutes from './routes/books.routes.js';
import cors from "cors"


const app = express();

app.use(express.json());
app.use(cors());

app.use(bookRoutes);



app.listen(PORT,()=>{
    console.log("Connected to backend server!")
})