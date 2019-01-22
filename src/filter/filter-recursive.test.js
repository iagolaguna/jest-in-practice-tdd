import { expect } from 'chai'
import filter from './filter-recursive'

describe('Filter', () => {
    it('should be a function', () => {
        expect(filter).to.be.a('function')
    })

    it('should filter([1,2,3],() => true) return [1,2,3]', () => {
        expect(filter([1, 2, 3], () => true))
            .to.be.deep.equal([1, 2, 3])
    })

    it('should filter(["a","b","c"],() => true) return ["a","b","c"]', () => {
        expect(filter(['a', 'b', 'c'], () => true))
            .to.be.deep.equal(['a', 'b', 'c'])
    })

    it('should filter([1,2,3],() => false) return []', () => {
        expect(filter([1, 2, 3], () => false))
            .to.be.deep.equal([])
    })

    it('should filter([1,2,3],(item) => item % 2) return [1,3]', () => {
        expect(filter([1, 2, 3], (item) => item % 2))
            .to.be.deep.equal([1, 3])
    })

    it('should filter([1,2,3,4,5,6],(item,index) => index >= 3) return [4,5,6]', () => {
        expect(filter([1, 2, 3, 4, 5, 6], (item, index) => index >= 3))
            .to.be.deep.equal([4, 5, 6])
    })

    it('should filter([0,20,2, 15, 10, 5],(item,index) => item === index) return [0,2,5]', () => {
        expect(filter([0, 20, 2, 15, 10, 5], (item, index) => item === index))
            .to.be.deep.equal([0, 2, 5])
    })

    it('should filter([1, 2, 3, 4, 5, 6], (item, i, arr) => (arr[i] + arr.length) >= 10) return [4, 5, 6]', () => {
        expect(filter([1, 2, 3, 4, 5, 6], (item, i, arr) => (arr[i] + arr.length) >= 10))
            .to.be.deep.equal([4, 5, 6])
    })

})