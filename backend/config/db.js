import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bhagatbalvant:balvant0081@cluster0.ttogmam.mongodb.net/food-dev').then(()=>console.log("db connected"));
}
// mongodb+srv://bhagatbalvant:balvant0081@cluster0.ttogmam.mongodb.net/?