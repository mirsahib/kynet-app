import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from "./src/routes/user.routes"
import authRoutes from './src/routes/auth.routes'
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use("/",userRoutes)
app.use("/",authRoutes)

app.get('/test',(req,res)=>{
    res.send('Hello')
})

export default app