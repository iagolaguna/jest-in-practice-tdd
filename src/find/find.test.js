import { expect } from 'chai'
import find from './find'

describe('Find', () => {
    it('find should be a function', () => {
        expect(find).to.be.a('function')
    })

    it('should find([1,2,3],(item) => item === 1) return 1', () => {
        expect(find([1, 2, 3], (item) => item === 1)).to.be.equal(1)
    })

    it('should find([1,2,3],(item) => item > 3 ) return undefined', () => {
        expect(find([1, 2, 3], (item) => item > 3)).to.be.undefined
    })

    it('should find([1,0,5,4,4,8,6],(item,index) => item === index ) return 4', () => {
        expect(find([1, 0, 5, 4, 4, 8, 6], (item, index) => item === index)).to.be.equal(4)
    })

    it('should find([1,0,5,4,4,8,6],(item,index,arr) => index === arr[item] ) return 4', () => {
        expect(find([1, 0, 5, 4, 4, 8, 6], (item, index, arr) => index === arr[item])).to.be.equal(1)
    })

})
