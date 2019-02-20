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
})
