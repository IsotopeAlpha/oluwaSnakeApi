import User from "../models/User.js";
import crypto from 'crypto';

export const creatUser = async (req, res) => {
    try {
        var newCode = crypto.randomBytes(3).toString('hex');
        const newCode = new User({...req.body, code: newCode});
        const savedUser = await newUser.save()
        res.status(200).json({ status: "ok", msg: "User with Code Created Successfully", data: savedUser });
    } catch (error) {
        res.status(400).json({status: "error", message:"Error Creating User", data: error}); 
        console.log(error)
    }
}

export const getUser = async(req, res) =>{
    try {
        const  user = await User.find({code: req.params.code});
        if(!user){
            res.status(401).json({status:"error", message:"Tracking Code Not Found", data:null})
        } 
        res.status(200).json({status:"ok", message:"Tracking Code Found", data: user});
    } catch (error) {
        res.status(400).json({status: "error", message:"Error Getting Tracking Code", data: error});  
    }
}

export const getUsers = async(req, res)=>{
    try {
        const user = await User.find();
        if(user.length<1){
            res.status(401).json({status:"error", message:"No User  Found", data:user})
        }
        res.status(200).json({status:"ok", message:"User(s) Found", data: user});
    } catch (error) {
        res.status(400).json({status: "error", message:"Error Getting User(s)", data: error}); 
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json({ status: "ok", msg: "User Updated successfully", data: updatedUser });
    } catch (error) {
        res.status(400).json({status: "error", message:"Error Updating User", data: error}); 
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ status: "ok", msg: "User has been deleted successfully" });
    } catch (error) {
        res.status(400).json({status: "error", message:"Error Deleting User", data: error}); 
    }
}