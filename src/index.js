module.exports = {
  sum(num1, num2) {
    return num1 + num2
  },
  sub(num1, num2) {
    return num1 - num2
  },
  mult(num1, num2) {
    return num1 * num2
  },
  div(num1, num2) {
    return num2 === 0 ? 'Não é possível dividir por zero!' : num1 / num2
  },
}
