import { Station } from "./station";
import { User } from "./user";

export interface SearchHistory {
    id: number,
    user: User,
    start: Station,
    end: Station,
    searchDate: string
}
