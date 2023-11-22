import { TBeer, TBeerExtended } from "../types/TBeer"
import { TOrder } from "../types/TOrder"

import BeerService from "./beer.service"


class OrderService {
    /**
     * @description Util function to create a new order giving the products
     * @param id [number] the id of the order/table to identify more later
     * @param products [number[]] the id of the products
     * @returns [TOrder]
     */
    static createAnOrder(id: number, products: { id: number, amount: number}[]): TOrder {
        if (!products.length) {
            throw new Error('No products selected, order can not be created')
        }

        const beers: TBeerExtended[] = products.map((product: { id: number, amount: number}) => {
            const beer: TBeer = BeerService.getById(product.id)
            return { ...beer, amount: product.amount }
        })
        const order: TOrder = {
            id,
            products: beers
        }
        return order
    }

    /**
     * @description Util function to retrieve a new order givint the id
     * @param id [number] the id of the order
     * @returns [TOrder]
     */
    static getOrder(id: number): TOrder {
        if (id !== 1) { // This need to be change to a validation to a pre existing order
            throw new Error("Order can not be found")
        }

        // Generate random order data
        const mockProductData: { id: number, amount: number}[] = [
            { id: 1, amount: 2 },
            { id: 2, amount: 3 },
            { id: 3, amount: 3 }
        ]
        const beers: TBeerExtended[] = mockProductData.map((product: { id: number, amount: number}) => {
            const beer: TBeer = BeerService.getById(product.id)
            return { ...beer, amount: product.amount }
        })
        const order: TOrder = {
            id,
            products: beers
        }
        return order
    }
}

export default OrderService
