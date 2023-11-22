import { TOrder } from "@/types/TOrder"
import { TCheck } from "@/types/TCheck"

import OrderService from "./order.service"


class CheckService {
    /**
     * @description Util function to generate a check givin the order
     * @param orderId [number] Order identifier
     * @returns [TCheck]
     */
    static getByOrderId(orderId: number): TCheck {
        const order: TOrder = OrderService.getOrder(orderId)

        // Calculate totals
        let total: number = 0
        for(const product of order.products) {
            total += (product.price * product.amount)
        }

        const check: TCheck = {
            id: 1,
            orderId,
            details: order.products,
            total
        }

        return check
    }

    /**
     * @description Util function to get a check giving the check id
     * @param id [number] Check identifier
     * @returns []
     */
    static getById(id: number): TCheck {
        if (id !== 2) {
            throw new Error('Check not found')
        }

        // Generate a check giving a mock order identifier
        // In the ideal case we need to retrieve the check already generated
        const check: TCheck = CheckService.getByOrderId(id)
        return check
    }
}

export default CheckService
