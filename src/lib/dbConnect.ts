import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: Number;
}

const connection :ConnectionObject = {}

export default async function dbConnect(): Promise<void> {

    if(connection.isConnected){
        console.log("ALready Connected to Database");
        return 
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI||"",{});

        connection.isConnected=db.connections[0].readyState

        console.log("DB Connected Successfully");

        
    } catch (error) {
        
        console.log("DB Connection Failed :: "+error);
        process.exit(1);
    }

} 