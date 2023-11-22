import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

import CheckService from '@/services/check.service'
import { TCheck } from '@/types/TCheck'


export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // Basic method validation
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not supported' })
    }    

    try {
        const { id: orderId } = req.query
        const data: TCheck = CheckService.getByOrderId(Number(orderId))

        return res.status(200).json({ data })
    } catch (err) {        
        console.error(`${path.basename(__filename)}:error generating the check, Error:${err}`)
        return res.status(500).json({ code: 'server-error', message: 'Error generating the check', data: err })
    }
}
