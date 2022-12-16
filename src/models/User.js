import mongoose from 'mongoose';

const CodeSchema = new mongoose.Schema({
    email:{
        type: String,
    },
    name:{
        type: String
    },
    code:{
        type: String,
        required: true,
        unique: true
    },
    item:[Map],
    status:{
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model("Tracking Code", CodeSchema)