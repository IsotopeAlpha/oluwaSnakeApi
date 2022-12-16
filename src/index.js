const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

const connect =() =>{
    try {
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OluwaSnake', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log(`Database Connection Error \n Error: ${error}`);
    }
}
connect();

app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res)=>{
    res.json("This is Oluwa Snake Website Api")
})

app.listen(port, ()=>{
    console.log(`Connected to server on port ${port}`);
})