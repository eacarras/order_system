import OrderService from '../../../services/order.service'
import { TOrder } from '../../../types/TOrder'

describe('/api/beer', () => {
    test('can not create an order without products', () => {
        let completOrder: boolean = true
        try {
            const order: TOrder = OrderService.createAnOrder(1, [])
        } catch(err) {
            completOrder = false
        }

        expect(completOrder).toEqual(false)
    })
    test('can not create an order with wrong ids', () => {
        let completOrder: boolean = true
        try {
            const order: TOrder = OrderService.createAnOrder(1, [{ id: 100, amount: 2 }])
        } catch(err) {
            completOrder = false
        }

        expect(completOrder).toEqual(false)
    })
    test('create an order success', () => {
        let completOrder: boolean = true
        try {
            const order: TOrder = OrderService.createAnOrder(1, [{ id: 1, amount: 10 }, { id: 2, amount: 14}])
        } catch(err) {
            completOrder = false
        }

        expect(completOrder).toEqual(true)
    })
})