import dotenv from 'dotenv'
import DBconnect from './db-connect.js'
import express from 'express'
import cors from 'cors'

dotenv.config()
DBconnect()

import Router from './routes/Store.js'

const app = express()

// app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())

app.use("/api",Router)

// app.use((req, res, next) => {
//   res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
//   res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//   next();
// });



const port = process.env.PORT || 5000  

app.listen(port,console.log("Server IS started at http://localhost:5000"))