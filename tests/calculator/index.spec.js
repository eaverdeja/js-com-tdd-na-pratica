import {expect} from 'chai'

import calc from '../../src/calculator/index'

describe('Calc', () => {
  const calcMethods = [
    {
      name: 'sum',
      tests: [
        {
          num1: 2,
          num2: 2,
          expectation: 4,
        },
        {
          num1: 2,
          num2: -1,
          expectation: 1,
        },
      ],
    },
    {
      name: 'sub',
      tests: [
        {
          num1: 2,
          num2: 2,
          expectation: 0,
        },
        {
          num1: 2,
          num2: -1,
          expectation: 3,
        },
      ],
    },
    {
      name: 'mult',
      tests: [
        {
          num1: 2,
          num2: 2,
          expectation: 4,
        },
        {
          num1: 3,
          num2: 3,
          expectation: 9,
        },
      ],
    },
    {
      name: 'div',
      tests: [
        {
          num1: 2,
          num2: 2,
          expectation: 1,
        },
        {
          num1: 12,
          num2: 3,
          expectation: 4,
        },
        {
          num1: 3,
          num2: 0,
          expectation: 'Não é possível dividir por zero!',
        },
      ],
    },
  ]

  describe('Smoke Tests', () => {
    it("should assert the calc lib's existence", () => {
      expect(calc).to.exist
    })
    calcMethods.forEach(({name}) => {
      it(`should have a ${name} method`, () => {
        expect(calc[name]).to.exist
        expect(calc[name]).to.be.a('function')
      })
    })
  })

  describe('Calc Methods', () => {
    calcMethods.forEach(({name, tests}) => {
      tests.forEach(({num1, num2, expectation}) => {
        it(`should return ${expectation} when \`${name}(${num1},${num2})\``, () => {
          const result = calc[name](num1, num2)
          expect(result).to.be.equal(expectation)
        })
      })
    })
  })
})
