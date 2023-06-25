import mongoose from "mongoose";

const connectToDB = async () => {
    try{
        if(mongoose.connection.readyState === 1){
            return mongoose.connection.asPromise();
        }
        return await mongoose.connect(process.env.MONGO_URI);

    }catch(error){
        throw new Error("Connection failed!",error)
    }
}

export default connectToDB