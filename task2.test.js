const reverseString = require('./task2');

test('november check', () => {
    expect(reverseString('november')).toBe('rebmevon');
});

test('string check', () => {
    expect(reverseString(562)).toBe('Not a string');
});

test('array check', () => {
    expect(reverseString(['hello'])).toBe('Not a string');
});