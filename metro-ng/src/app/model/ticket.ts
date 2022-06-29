import { Station } from "./station";
import { User } from "./user";

export interface Ticket{
    id:number,
    user:User,
    from:Station,
    to: Station,
    price:number,
    date:string
    no_of_tickets:number;
}
