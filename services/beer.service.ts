import { TBeer } from "@/types/TBeer"

class BeerService {
    /**
     * @description function used to retrieve all beer information
     * @returns [TBeer[]]
     */
    static getAll(): TBeer[] {
        return [
            { id: 1, name: "Stella", available: 100, price: 15, currency: "USD" },
            { id: 2, name: "Corona", available: 100, price: 12, currency: "USD" },
            { id: 3, name: "Efes", available: 100, price: 10, currency: "USD" },
        ]
    }
}

export default BeerService
