import fizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
    /*it("Deberia funcionar la funcion", () => {
        const numero = fizzBuzz(3);
      expect(numero).toEqual('3');
    });*/
    it("Deberia devolver un numero en cadena", () => {
        const numero = fizzBuzz(4);
      expect(numero).toEqual('4');
    });
    it("Deberia devolver un Fizz si es 3", () => {
        const numero = fizzBuzz(3);
      expect(numero).toEqual('Fizz');
    });
    it("Deberia devolver un Fizz si es multiplo de 3", () => {
        const numero = fizzBuzz(6);
      expect(numero).toEqual('Fizz');
    });
    it("Deberia devolver un Buzz si es 5", () => {
        const numero = fizzBuzz(5);
      expect(numero).toEqual('Buzz');
    });
    it("Deberia devolver un Buzz si es multiplo de 5", () => {
        const numero = fizzBuzz(10);
      expect(numero).toEqual('Buzz');
    });
    it("Deberia devolver un FizzBuzz si es multiplo de 3 y 5", () => {
        const numero = fizzBuzz(15);
      expect(numero).toEqual('FizzBuzz');
    });
});
