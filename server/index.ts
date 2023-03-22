import app from "./express"
import dbConnection from "./database/database"
const port = process.env.PORT || 3000

const server = async()=>{
    await dbConnection()
    app.listen(port,()=>{
        console.log(`Server listening on ${port}`)
    })    
}
server()


