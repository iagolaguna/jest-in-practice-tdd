import { expect } from 'chai'
import every from './every'

describe('Every', () => {
    it('should be a function', () => {
        expect(every).to.be.a('function')
    })

    it('should every([1,2,3], (item) => item) return true', () => {
        expect(every([1, 2, 3], (item) => item)).to.be.true
    })

    it('should every([0, 1, 2, 3], (item) => item) return false', () => {
        expect(every([0, 1, 2, 3], (item) => item)).to.be.false
    })

    it('should every([0, 1, 2, 3, 4], (item, index) => item === index) return true', () => {
        expect(every([0, 1, 2, 3, 4], (item, index) => item === index)).to.be.true
    })

    it('should every([0, 1, 2, 3, 4], (item, index) => index % 2) return false', () => {
        expect(every([0, 1, 2, 3, 4], (item, index) => index % 2)).to.be.false
    })

    it('should every([0, 1, 2, 3, 4], (item, index, arr) => arr[index] === item) return true', () => {
        expect(every([0, 1, 2, 3, 4], (item, index, arr) => arr[index] === item)).to.be.true
    })

    it('should every([0, 1, 2, 3, 4], (item, index, arr) => (arr[index]+index) === item) return false', () => {
        expect(every([0, 1, 2, 3, 4], (item, index, arr) => (arr[index] + index) === item)).to.be.false
    })


});