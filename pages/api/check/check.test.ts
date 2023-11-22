import CheckService from '../../../services/check.service'
import { TCheck } from '../../../types/TCheck'

describe('/api/beer', () => {
    test('can not create a check with an invalid order id', () => {
        let completOrder: boolean = true
        try {
            const order: TCheck = CheckService.getByOrderId(2)
        } catch(err) {
            completOrder = false
        }

        expect(completOrder).toEqual(false)
    })
    test('generate the check success', () => {
        let completOrder: boolean = true
        let check: TCheck|undefined
        try {
            check = CheckService.getByOrderId(1)
        } catch(err) {
            completOrder = false
        }

        expect(completOrder).toEqual(true)
        expect(check).toBeDefined()
        expect(check?.total).toEqual(96)
    })
})