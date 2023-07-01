import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cors from 'cors'
import routes from "./routes/router.js"
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
dotenv.config();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);



const start = async() => {
    await connectDB(process.env.MONGODB_URL);
    console.log("DB connected successfully");
    app.listen(PORT,(err)=>{
        if(err){ return console.log('error while setting up server :', err); }
        console.log(`server is running on port ${PORT}`);
    })
}
start();