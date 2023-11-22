import { TBeer } from "@/types/TBeer"

const mockBeers: TBeer[] = [
    { id: 1, name: "Stella", available: 100, price: 15, currency: "USD" },
    { id: 2, name: "Corona", available: 100, price: 12, currency: "USD" },
    { id: 3, name: "Efes", available: 100, price: 10, currency: "USD" },
]
class BeerService {
    /**
     * @description function used to retrieve all beer information
     * @returns [TBeer[]]
     */
    static getAll(): TBeer[] {
        return mockBeers
    }

    /**
     * @description function used to retrieve one beer information
     * @param id [number] id of the beer to retrieve
     * @returns [TBeer|null]
     */
    static getById(id: number): TBeer {
        const beer: TBeer|null|undefined = mockBeers.find(beer => beer.id === id)
        if (!beer) {
            throw new Error('Beer not found')
        }

        return beer
    }
}

export default BeerService
