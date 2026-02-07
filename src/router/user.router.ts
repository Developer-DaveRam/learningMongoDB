import express from "express";
import { UserController } from "../controller/user.controller.js";

const userRouter = express.Router()

const routerUser = new UserController()

userRouter.post("/createUser",
    //#swagger.tags = ['user']
    //#swagger.parameters['body']  = {in:'body',schema:{email:"s@gmail.com",name:"UIUY",password:"JDJD",preferences:{dj:"ss"}}}
    routerUser.createUser)


export default userRouter