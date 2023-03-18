import fizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
    /*it("Deberia funcionar la funcion", () => {
        const numero = fizzBuzz(3);
      expect(numero).toEqual('3');
    });*/
    it("Deberia devolver un numero en cadena", () => {
        const numero = fizzBuzz(3);
      expect(numero).toEqual('3');
    });
    
});
