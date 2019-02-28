export default (num) => {
  const divisivelPor3 = num % 3 === 0
  const divisivelPor5 = num % 5 === 0

  if (divisivelPor3 && divisivelPor5) return 'FizzBuzz'
  if (divisivelPor3) return 'Fizz'
  if (divisivelPor5) return 'Buzz'

  return num
}
