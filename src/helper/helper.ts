// export type ResponseFormate = {
//     status:Number,
//     message:String,
//     data:any[]
// }

// export class ResponseBuilder{
//     private staus:Number;
//     private message:String;
//     private data:any[]

//     constructor(
//         staus:Number,
//         message:String,
//         data:any[]
//     ){
//         this.staus = staus,
//         this.message = message,
//         this.data = data
//     }

//     build():ResponseFormate{
//         return{
//             status:this.staus,
//             message:this.message,
//             data:this.data
//         }
//     }
//     static Sucess(status:Number,message:String,data:any[]):ResponseFormate{
//         return new ResponseBuilder(status,message,data).build()
//         }

//         static Error(status:Number,message:String,data:any[]):ResponseFormate{
//             return new ResponseBuilder(status,message,data).build()
//         }
// }