const expect = require('chai').expect

const calc = require('../src/index')

describe('Calc', () => {
  const calcMethods = [
    {
      name: 'sum',
      tests: [
        {
          num1: 2,
          num2: 2,
          expect: 4,
        },
        {
          num1: 2,
          num2: -1,
          expect: 1,
        },
      ],
    },
    {
      name: 'sub',
      tests: [
        {
          num1: 2,
          num2: 2,
          expect: 0,
        },
        {
          num1: 2,
          num2: -1,
          expect: 3,
        },
      ],
    },
    {
      name: 'mult',
      tests: [
        {
          num1: 2,
          num2: 2,
          expect: 4,
        },
        {
          num1: 3,
          num2: 3,
          expect: 9,
        },
      ],
    },
    {
      name: 'div',
      tests: [
        {
          num1: 2,
          num2: 2,
          expect: 1,
        },
        {
          num1: 12,
          num2: 3,
          expect: 4,
        },
      ],
    },
  ]

  describe('Smoke Tests', () => {
    it("should assert the calc lib's existence", () => {
      expect(calc).to.exist
    })
    calcMethods.forEach((method) => {
      it(`should have a ${method.name} method`, () => {
        expect(calc[method.name]).to.exist
        expect(calc[method.name]).to.be.a('function')
      })
    })
  })

  describe('Calc Methods', () => {
    calcMethods.forEach((method) => {
      method.tests.forEach((test) => {
        it(`should return ${test.expect} when \`${method.name}(${test.num1},${
          test.num2
        })\``, () => {
          const result = calc[method.name](test.num1, test.num2)
          expect(result).to.be.equal(test.expect)
        })
      })
    })
  })
})
