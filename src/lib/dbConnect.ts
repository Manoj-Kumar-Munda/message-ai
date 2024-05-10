import mongoose from "mongoose"

type ConnectionObject = {
    isConnected ?: number
}


const connection:ConnectionObject = {}

async function dbCOnnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        console.log("Database: ", db);
        connection.isConnected = db.connections[0].readyState;
        console.log("DbCOnnections: ", db.connections);
        console.log("DB connected successfully");
        
    } catch(error){
        console.log("Database connection failed");
        process.exit(1);

    }
    
}

export default dbCOnnect; 