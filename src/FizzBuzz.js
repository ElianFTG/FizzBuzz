function fizzBuzz(numero) {
    const num = numero;
    var cadena = num.toString();
    if (num % 3 === 0) {
        cadena = "Fizz"
    }
    return cadena;
}

export default fizzBuzz;