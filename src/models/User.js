const mongoose = require('mongoose');

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
    }
},{timestamps:true});

export default mongoose.model("Users", UserSchema)