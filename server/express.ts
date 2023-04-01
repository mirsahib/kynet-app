import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRoutes from "./src/routes/user.routes"
import authRoutes from './src/routes/auth.routes'
import adsRoutes from './src/routes/ads.routes'
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

app.use("/",userRoutes)
app.use("/",authRoutes)
app.use("/",adsRoutes)

app.get('/test',(req,res)=>{
    res.send('Hello')
})

  

export default app