import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

import BeerService from '@/services/beer.service'
import { TBeer } from '@/types/TBeer'


export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // Basic method validation
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not supported' })
    }    

    try {
        const data: TBeer[] = BeerService.getAll()
        return res.status(200).json({ data })
    } catch (err) {        
        console.error(`${path.basename(__filename)}:error getting all the beers, Error:${err}`)
        return res.status(500).json({ code: 'server-error', message: 'Error on get all the beers', data: err })
    }
}
