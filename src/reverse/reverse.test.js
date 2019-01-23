import { expect } from 'chai'
import reverse from './reverse'
describe('reverse', () => {
    it('should be a function', () => {
        expect(reverse).to.be.a('function')
    })

    it('should reverse([]) return []', () => {
        expect(reverse([])).to.be.deep.equal([])
    })
    it('should reverse([1,2,3]) return [3,2,1]', () => {
        expect(reverse([1,2,3])).to.be.deep.equal([3,2,1])
    })

    it('should reverse(["a","b","c"]) return ["c","b","a"]', () => {
        expect(reverse(['a','b','c'])).to.be.deep.equal(['c','b','a'])
    })
})