import mongoose from "mongoose";

const connect = async()=>{
    await mongoose.connect("mongodb://localhost:27017/user")
}

connect().then(()=>{
    console.log("connection established")
}).catch((err)=>console.log(err))

const schema =new mongoose.Schema({
    name: String,
    img: String,
    Email: String,
    phone: Number,
})

