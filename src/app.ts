import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/db.js'

dotenv.config()
const app = express()


const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

db()

app.listen(PORT,()=>{
    console.log(`Server is on port http://localhost:${PORT}`)
})
