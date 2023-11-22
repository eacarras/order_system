export type TBeer = {
    id: number
    name: string
    available: number
    price: number
    currency: "USD"
}

export type TBeerExtended = TBeer & {
    amount: number
}
