describe('Index', () => {
  let arr

  beforeEach(() => {
    arr = [1, 2, 3]
  })

  it('should have a size of 4 when we push a value into the array', () => {
    arr.push(4)
    console.log(arr.length)
  })

  it('should retrieve the value 3 from the array if we pop it', () => {
    console.log(arr.pop() === 3)
  })

  it('should have a size of 2 when we pop a value from the array', () => {
    arr.pop()
    console.log(arr.length)
  })
})
