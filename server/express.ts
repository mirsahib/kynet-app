import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/api',(req,res)=>{
    res.send('Hello')
})

export default app