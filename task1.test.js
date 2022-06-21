const stringLength = require('./task1');

test('microverse length', () => {
    expect(stringLength('microverse')).toBe(10);
});

test('people length', () => {
    expect(stringLength('people')).toBe(6);
});

test('Empty string', () => {
    expect(() => { stringLength(''); }).toThrow('String is empty or the length is greater than 10 characters');
});

test('GoodMorning length', () => {
    expect(() => { stringLength('GoodMorning') }).toThrow('String is empty or the length is greater than 10 characters');
});