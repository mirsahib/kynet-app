import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api',(req,res)=>{
    res.send('Hello')
})

app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})