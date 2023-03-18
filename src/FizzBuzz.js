function fizzBuzz(numero) {
    var num = numero;
    let cadena = num.toString();
    if (num % 3 === 0 && num % 5 === 0){
        cadena = "FizzBuzz"
    }
    else if(num % 3 === 0){
        cadena = "Fizz";
    }
    else if (num % 5 === 0) {
        cadena = "Buzz";
    }
    return cadena;
}

export default fizzBuzz;