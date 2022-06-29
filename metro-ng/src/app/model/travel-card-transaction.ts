import { TravelCard } from "./travel-card";

export interface TravelCardTransaction{
    id: number,
    travelCard: TravelCard,
    credit_or_debit: string,
    transfer_amount: number,
    balance: number
  
}