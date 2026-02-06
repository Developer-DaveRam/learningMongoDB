export interface Theater{
    _id?:string,
    theaterId:number,
    location:{
        address:{
            city:string,
            state:string,
            street1:string,
            street2?:string,
            zipcode:string
        },
    
    geo:{
        type:string,
        coordinates:[number,number]
    }

    }    
    createdAt?:Date;
    updatedAt?:Date
}