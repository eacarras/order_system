import { TBeerExtended } from "./TBeer"

export type TCheck = {
    id: number
    orderId: number,
    details: TBeerExtended[]
    total: number
}
