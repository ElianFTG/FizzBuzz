function fizzBuzz(numero) {
    var num;
    let cadena = "";
    for (var i = 0; i < numero; i ++) {
        num = i + 1;
        if (num % 3 === 0 && num % 5 === 0){
            cadena += "FizzBuzz"
        }
        else if(num % 3 === 0){
            cadena += "Fizz";
        }
        else if (num % 5 === 0) {
            cadena += "Buzz";
        }
        else {
            cadena += num.toString();
        }
        if(i != numero - 1) {
            cadena += ",";
        }
    }
    return cadena;
}

export default fizzBuzz;