export interface User{
    email:string,
    name:string,
    password:string,
    // preferences?:Record<string,any>
    preferences?:{}
}