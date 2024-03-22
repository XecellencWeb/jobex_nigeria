import mongoose from "mongoose";

export const connectDb = async()=>{
    let connected = false
    if(!connected){
        //@ts-ignore
        await mongoose.connect(process.env.DB_NAME)
        console.log('connected to dm')
        connected = true
    }
}