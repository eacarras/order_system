import BeerService from '../../../services/beer.service'
import { TBeer } from '../../../types/TBeer'


describe('/api/beer', () => {
    test('returns a list of beers', () => {
        const data: TBeer[] = BeerService.getAll()
        expect(data).toHaveLength(3)
    })
})