import map from './map'
import { expect } from 'chai'
describe('Map', () => {
    it('should be a function', () => {
        expect(map).to.be.a('function')
    })

    it('should return all numbers of array increased by 1', () => {
        const arr = [1, 2, 3, 4, 5]
        expect(map(arr, (n) => n + 1)).to.deep.equal([2, 3, 4, 5, 6])
    })

    it('should return an array of arrays with the element and index of the same', () => {
        const arr = ['a', 'b', 'c', 'd', 'e']
        expect(map(arr, (word, index) => [word, index]))
            .to.deep
            .equal([['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4]])
    })

    it('should return an array of arrays with the element, index of the element, the original array passed to the function', () => {
        const arr = ['a', 'b', 'c', 'd', 'e']
        expect(map(arr, (word, index, arr) => [word, index, arr]))
            .to.deep
            .equal([['a', 0, arr], ['b', 1, arr], ['c', 2, arr], ['d', 3, arr], ['e', 4, arr]])
    })
})