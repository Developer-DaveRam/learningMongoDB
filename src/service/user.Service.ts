import { ResponseBuilder, type ResponseFormate,  } from "../helper/responseFormate.js";
import type { User as IUser } from "../interface/user.interface.js";
import { User } from "../model/user.Schema.js";

export  class UserService{
    async createUser(data:IUser):Promise<ResponseFormate>{
        try {
            const createUser = await User.create(data)
            console.log('createUser', createUser)
            return ResponseBuilder.sucess(1,"Sucess",[createUser])
        } catch (error:any) {
            return ResponseBuilder.failur(0,error.message,[error])
        }
    }
} 