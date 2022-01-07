import { fizzBuzz } from "../scripts/FizzBuzz";

describe("fizzBuzz", ()=> {

    test('should return Fizz if div by 3', () => {
        let numb=3;
        let result=fizzBuzz(numb);
        expect(result).toBe("Fizz");
    });

    test('should return Buzz if div by 5', () => {
        let numb=5;
        let result=fizzBuzz(numb);
        expect(result).toBe("Buzz");
    });

    test('should return FizzBuzz if div by 3 and 5', () => {
        let numb=15;
        let result=fizzBuzz(numb);
        expect(result).toBe("FizzBuzz");
    });

    test('should return the same numb no div no contain 3 or 5', () => {
        let numb=4;
        let result=fizzBuzz(numb);
        expect(result).toBe(numb);
    });

    test('should return Fizz if div by 3 or has a 3', () => {
        let numb=13;
        let result=fizzBuzz(numb);
        expect(result).toBe("Fizz");
    });

    test('should return Buzz if div by 5 or has a 5', () => {
        let numb=58;
        let result=fizzBuzz(numb);
        expect(result).toBe("Buzz");
    });


});