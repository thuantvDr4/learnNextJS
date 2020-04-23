import express from "express";
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import {config} from "dotenv";


// app
const app = express()

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

// cors
app.use(cors())

// routes
app.get('/api', (rep, res)=>{res.json({ time: Date().toString() })})

// port
const port = process.env.PORT || 8000;



