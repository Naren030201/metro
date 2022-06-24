import { Station } from "./station";
import { User } from "./user";

export interface Ticket{
    id:number,
    user:User,
    start:Station,
    end: Station,
    price:number,
    travel:string
}
