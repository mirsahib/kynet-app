import { MongoClient } from "mongodb";

const dbConnection = async()=>{
    const uri = "mongodb://root:root@kynet_database:27017/kynet"
    const client = new MongoClient(uri)
    try {
        await client.connect()
        console.log("Database connection established")
    } catch (error) {
        console.log("Mongodb connection error:"+error)
    }finally{
        await client.close()
    }
}

export default dbConnection