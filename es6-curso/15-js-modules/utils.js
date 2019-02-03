function sum(a, b) {
  return a + b
}

// named export
// ter vários exports dentro de um
// msm arquivo
// só pode chamar com o msm nome
// import precisa das chaves { sub }
export function sub(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

function div(a, b) {
  return a / b
}

// Criando e exportando uma arrow function ao mesmo tempo
export const almostExp = (a, b) => new Array(b).fill(1).reduce(acc => acc * a, 1)

// Criando uma arrow function e exportando
// ela com as demais funções (mais abaixo)
const almostLog = (a, b) => {
  let res = a
  let count = 0
  do {
    res /= b
    count += 1
  } while (res > 1)

  return count
}

const PI = 3.14

export {
  mult as multiplicacao, div, PI, almostLog,
}

// método principal
// só pode ter um defaut por arquivo
// importar com qq nome
// não precisa utilizar as chaves
export default sum
