describe('Index', () => {
  describe('Bools', () => {
    context('only() on it()', () => {
      it.only('does something special', () => false)
    })

    context.only('only() on context()', () => {
      it('does something very special', () => true)
      it('does something more special', () => !false)
    })
  })

  /**
   * The whole describe() block is skipped because
   * of the only() calls. Removing the describe(Bools)
   * block would call Case 1, but we would still have
   * 2 pending tests (one success and one failure)
   *
   * O bloco describe() abaixo é ignorado
   * por conta das chamadas à only(). Remover o bloco
   * describe(Bools) chamaria o Case 1, mas ainda teríamos
   * dois testes pendentes (um sucesso e uma falha)
   */
  describe('Logs', () => {
    context('Case 1', () => {
      it('does something lame', () => {
        console.log('something lame')
      })
      it.skip('would fail!', () => {
        throw new Error('BOOM!')
      })
    })
    context.skip('skip() on context()', () => {
      it('does something very lame', () => {
        console.log(`${!!false}`)
      })
    })
  })
})
