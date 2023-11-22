import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

import { TOrder } from '@/types/TOrder'
import OrderService from '@/services/order.service'


type OrderBody = {
    id: number
    products: number[]
}
export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // Basic method validation
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not supported' })
    }    

    try {
        const body: OrderBody = req.body as unknown as OrderBody

        const order: TOrder = OrderService.createAnOrder(body.id, body.products)
        return res.status(200).json({ data: order })
    } catch (err) {        
        console.error(`${path.basename(__filename)}:error getting all the beers, Error:${err}`)
        return res.status(500).json({ code: 'server-error', message: 'Error on get all the beers', data: err })
    }
}
