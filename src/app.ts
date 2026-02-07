import express from 'express'
import dotenv from 'dotenv'
import swaggerOutput from './config/swagger-output.json' with {type:"json"} 
import swaggerui from 'swagger-ui-express'
import userRouter from './router/user.router.js'

dotenv.config()
const app = express()


const PORT = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRouter)

app.use("/swagger",swaggerui.serve,swaggerui.setup(swaggerOutput))

app.listen(PORT,()=>{
    console.log(`Server is on port http://localhost:${PORT}`)
})
