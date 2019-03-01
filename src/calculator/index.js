export default {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => (num2 === 0 ? 'Não é possível dividir por zero!' : num1 / num2),
  exp: (num1, num2) => num1 ** num2,
  natLog: num => Math.log(num),
}
