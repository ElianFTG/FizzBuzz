function fizzBuzz(numero) {
    const num = numero;
    var cadena = num.toString();
    if(num % 3 === 0){
        cadena = "Fizz";
    }
    else if (num === 5) {
        cadena = "Buzz";
    }
    return cadena;
}

export default fizzBuzz;