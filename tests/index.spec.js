const expect = require('chai').expect

describe('Index', () => {
  let arr

  beforeEach(() => {
    arr = [1, 2, 3]
  })

  // Smoke test
  it('should be an array', () => {
    expect(arr).to.be.an('array')
  })

  it('should have a size of 4 when we push a value into the array', () => {
    arr.push(4)
    expect(arr).to.have.a.lengthOf(4)
  })

  it('should retrieve the value 3 from the array if we pop it', () => {
    expect(arr.pop()).to.equal(3)
    expect(arr).to.not.include(3)
  })

  it('should have a size of 2 when we pop a value from the array', () => {
    arr.pop()
    expect(arr).to.have.a.lengthOf(2)
  })

  it('should still find 1 and 2 if we pop the array', () => {
    arr.pop()
    const hasOne = arr.includes(1)
    const hasTwo = arr.includes(2)
    expect(hasOne).to.be.true
    expect(hasTwo).to.be.true
  })
})
