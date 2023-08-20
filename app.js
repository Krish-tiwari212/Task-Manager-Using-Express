import express from "express"
import tasks from "./routes/tasks.js"
import {connectDB} from "./db/connect.js"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express()
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.get("/hello",(req,res)=>{
    res.send("Task Manager App")
})

app.use("/api/v1/tasks",tasks)

const port = 5000

console.log(process.env.MONGO_URI)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port:${port}`))
    } catch(error){
        console.log(error)
    }
}

start()
