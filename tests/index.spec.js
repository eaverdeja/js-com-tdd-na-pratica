describe('Index', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      it('does something special', () => false)
    })

    context('Case 2', () => {
      it('does something very special', () => true)
    })
  })

  describe('Method B', () => {
    context('Case 1', () => {
      it('does something lame', () => {
        console.log('something lame')
      })
    })
  })
})
