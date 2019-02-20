const expect = require('chai').expect

const calc = require('../src/index')

describe('Calc', () => {
  describe('Smoke Tests', () => {
    it("should assert the calc lib's existence", () => {
      expect(calc).to.exist
    })

    const calcMethods = ['sum', 'sub', 'mult', 'div']
    calcMethods.forEach((method) => {
      it(`should have a ${method} method`, () => {
        expect(calc[method]).to.exist
        expect(calc[method]).to.be.a('function')
      })
    })
  })

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4)
    })

    it('should return 1 when `sum(2,-1)`', () => {
      expect(calc.sum(2, -1)).to.be.equal(1)
    })
  })

  describe('Sub', () => {
    it('should return 0 when `sub(2,2)`', () => {
      expect(calc.sub(2, 2)).to.be.equal(0)
    })

    it('should return 3 when `sub(2,-1)`', () => {
      expect(calc.sub(2, -1)).to.be.equal(3)
    })
  })

  describe('Mult', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(calc.mult(2, 2)).to.be.equal(4)
    })

    it('should return 9 when `mult(3,3)`', () => {
      expect(calc.mult(3, 3)).to.be.equal(9)
    })
  })

  describe('Div', () => {
    it('should return 1 when `div(2,2)`', () => {
      expect(calc.div(2, 2)).to.be.equal(1)
    })

    it('should return 4 when `div(12,3)`', () => {
      expect(calc.div(12, 3)).to.be.equal(4)
    })
  })
})
