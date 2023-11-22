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
}

export default CheckService
