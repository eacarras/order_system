import CheckService from '../../../services/check.service'
import { TCheck } from '../../../types/TCheck'

describe('/api/beer', () => {
    test('can not create a check with an invalid order id', () => {
        let completeGenerateCheck: boolean = true
        try {
            const order: TCheck = CheckService.getByOrderId(2)
        } catch(err) {
            completeGenerateCheck = false
        }

        expect(completeGenerateCheck).toEqual(false)
    })
    test('generate the check success', () => {
        let completeGenerateCheck: boolean = true
        let check: TCheck|undefined
        try {
            check = CheckService.getByOrderId(1)
        } catch(err) {
            completeGenerateCheck = false
        }

        expect(completeGenerateCheck).toEqual(true)
        expect(check).toBeDefined()
        expect(check?.total).toEqual(96)
    })
    test('check id not valid', () => {
        let completeGenerateCheck: boolean = true
        try {
            CheckService.getById(3)
        } catch(err) {
            completeGenerateCheck = false
        }

        expect(completeGenerateCheck).toEqual(false)
    })
})