import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

import CheckService from '@/services/check.service'
import PayService from '@/services/pay.service'

import { IPayData } from '@/types/TPayment'


export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // Basic method validation
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not supported' })
    }    

    try {
        const { id: checkId } = req.query
        const body: IPayData[] = req.body as unknown as IPayData[]
        // First we need to get the check to avoid pay not valid values
        const data: any = CheckService.getByOrderId(Number(checkId))
        // Generate the pay
        const complete: IPayData[]|null = PayService.payCheckByNPersons(data, body)
        if (complete && complete.length) {
            throw new Error(`Pay check failed ${complete.toString()}`)
        }

        return res.status(200).json({ message: "Payment complete successfully" })
    } catch (err) {        
        console.error(`${path.basename(__filename)}:error completing the payment, Error:${err}`)
        return res.status(500).json({ code: 'server-error', message: 'Error completing the payment', data: err })
    }
}
