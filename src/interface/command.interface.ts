export interface Command{
    _id?:string,
    date:Date,
    email:string,
    movie_id:string,
    name:string,
    text:string,
    createdAt?:Date;
    updatedAt?:Date
}