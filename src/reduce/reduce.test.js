import { expect } from 'chai'
import reduce from './reduce'

describe('Reduce', () => {
    it('reduce should be a function', () => {
        expect(reduce).to.be.a('function')
    });

    it('should reduce([1, 2, 3], (acc, item) => acc + item) return  6 ', () => {
        expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).to.be.equal(6)
    });

    it('should reduce([1, 2, 3], (acc, item) => acc + item, 6) return  6 ', () => {
        expect(reduce([1, 2, 3], (acc, item) => acc + item, 6)).to.be.equal(12)
    });

    it('should reduce([1, 2, 3], (acc, item, index) => {acc[`index ${index}`] = item; return acc}, {}) return  { "index 0": 1, "index 1": 2, "index 2": 3 } ', () => {
        expect(reduce([1, 2, 3], (acc, item, index) => { acc[`index ${index}`] = item; return acc }, {}))
            .to.be.deep
            .equal({ 'index 0': 1, 'index 1': 2, 'index 2': 3 })
    });

    it('should reduce([1, 2, 3], (acc, item, index) => [...acc, [index, item]], []) return [[0, 1], [1, 2], [2, 3]]', () => {
        expect(reduce([1, 2, 3], (acc, item, index) => [...acc, [index, item]], []))
            .to.be.deep
            .equal([[0, 1], [1, 2], [2, 3]])
    });

    it('should reduce([1, 2, 3], (acc, item, index, arr) => [...acc, item + reduce(arr, (acc, item) => acc + item, 0)], 0) return [7,8,9]', () => {
        expect(reduce([1, 2, 3], (acc, item, index, arr) => [...acc, item + reduce(arr, (acc, item) => acc + item, 0)], 0))
            .to.be.deep
            .equal([7, 8, 9])
    });
});