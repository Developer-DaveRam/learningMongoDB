export type ResponseFormate = {
    status:Number,
    message:String,
    data:any[]
}

export class ResponseBuilder {
    private status:Number;
    private message :String;
    private data : any [];

    constructor(
        status:Number ,
        message:String = "",
        data:any[] = []
    ){
        this.status =status,
        this.message = message,
        this.data = data
    }

    build(): ResponseFormate{
        return {
            status:this.status,
            message:this.message,
            data:this.data
        }
    }


    static sucess(status:number,message:"Sucess",data:any[] = []):ResponseFormate{
        return new ResponseBuilder(status,message,data).build()
    }

    static failur(status:number,message:"Failer",data:any[] = []):ResponseFormate{
        return new ResponseBuilder(status,message,data).build()
    }

}