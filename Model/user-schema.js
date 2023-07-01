import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true
    },
    name : String,
    userName : String,
    email : String,
    phoneNumber : String
})


export default new mongoose.model('User', userSchema);