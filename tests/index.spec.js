describe('Index', () => {
  before(() => {
    console.log('before')
  })

  after(() => {
    console.log('after')
  })

  beforeEach(() => {
    console.log('\tbeforeEach')
  })

  afterEach(() => {
    console.log('\tafterEach')
  })

  it('is the first test', () => {
    console.log('\t  first test!')
  })

  it('is the second test', () => {
    console.log('\t  second test!')
  })
})
