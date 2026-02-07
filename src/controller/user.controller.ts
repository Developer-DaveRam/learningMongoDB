import type { RequestHandler } from "express";
import { UserService } from "../service/user.Service.js";
import type { User } from "../interface/user.interface.js";
import { ResponseBuilder } from "../helper/responseFormate.js";

export class UserController{
    private userService = new UserService()
         createUser:RequestHandler = async(req,res)=>{
        try {
            const data:User = req.body
            const create  = await this.userService.createUser(data)
            console.log('create', create)
            return res.status(200).json(create)
        } catch (error:any) {
            return res.status(400).json(ResponseBuilder.failur(0,"Internal Server Error",[error.message]))
        }
    }
}