import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String
    },
    code:{
        type: String
    },
    item:{
        type: [String]
    },
    quantity:{
        type: [String]
    },
    status:{
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.model("Users", UserSchema)