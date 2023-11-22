import { TCheck } from "@/types/TCheck";
import { IPayData } from "@/types/TPayment";

class PayService {
    /**
     * @description Util functio to process payment
     * @param check [TCheck] check object with the total information
     * @param paymentData [TPayData] payment information
     * @returns [IPayData|null] payment information not passed
     */
    static payCheckByNPersons(check: TCheck, paymentData: IPayData[]): IPayData[]|null {
        const totalPerPerson = check.total / paymentData.length

        const notPassed: IPayData[] = []
        for (let i = 0; i < paymentData.length; i++) {
            const payment: IPayData = paymentData[i]
            try {
                // Here logic with payment information
                // use total per person and payment information to generate the pay
            } catch (err) {
                notPassed.push(payment)
            }
        }
        

        return notPassed.length ? notPassed : null
    }
}

export default PayService
