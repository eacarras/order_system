import { TBeer } from "./TBeer"

export type TOrder = {
    id: number // Can be used as table number
    products: TBeer[]
}
