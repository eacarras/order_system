import { TBeer } from "../types/TBeer"
import { TOrder } from "../types/TOrder"

import BeerService from "./beer.service"


class OrderService {
    /**
     * @description Util function to create a new order giving the products
     * @param id [number] the id of the order/table to identify more later
     * @param products [number[]] the id of the products
     * @returns [TOrder]
     */
    static createAnOrder(id: number, products: number[]): TOrder {
        if (!products.length) {
            throw new Error('No products selected, order can not be created')
        }

        const beers: TBeer[] = products.map(id => BeerService.getById(id))
        const order: TOrder = {
            id,
            products: beers
        }
        return order
    }
}

export default OrderService
