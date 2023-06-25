import mongoose from "mongoose";


const connectDB = (url:string|undefined):any => {
    if (url)return mongoose.connect(url);
}

export default connectDB