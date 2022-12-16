import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoute from '../src/routes/User.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);
const port = process.env.PORT || 5000;

const connect =() =>{
    try {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Oluwa', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log(`Database Connection Error \n Error: ${error}`);
    }
}
connect();

app.use(express());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use("/user", userRoute);

app.get('/', (req, res)=>{
    res.json("This is Oluwa Snake Website Api")
})

app.listen(port, ()=>{
    console.log(`Connected to server on port ${port}`);
})