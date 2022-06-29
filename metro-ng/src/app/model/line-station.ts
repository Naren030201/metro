import { Line } from "./line"
import { Station } from "./station"

export interface LineStation {
    id: number,
    line:Line,
    station: Station,
    sequence: number,
    distance: number

}