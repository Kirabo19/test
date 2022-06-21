const calculator = require('./task3');

describe('calculator', () => {
    const calcul = new calculator(2, 1);

    test('Test add function', () => {
        expect(calcul.add()).toBe(3);
    });

    test('Test substract function', () => {
        expect(calcul.substract()).toBe(1);
    });

    test('Test multiply function', () => {
        expect(calcul.multiply()).toBe(2);
    });

    test('Test divide function', () => {
        expect(calcul.divide()).toBe(2);
    });
});

describe('calculator', () => {
    const calcul = new calculator(2, 0);

    test('Test add function', () => {
        expect(calcul.add()).toBe(2);
    });

    test('Test substract function', () => {
        expect(calcul.substract()).toBe(2);
    });

    test('Test multiply function', () => {
        expect(calcul.multiply()).toBe(0);
    });

    test('Test divide function', () => {
        expect(calcul.divide()).toBe("You can't divide by 0");
    });
});