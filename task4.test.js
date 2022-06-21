const capitalize = require('./task4');

test('Is The Type A String', () => {
    expect(typeof capitalize('start')).toBe('string');
});

test('Is Capitalized', () => {
    expect(capitalize('january')).toBe('January');
});

test('Is String', () => {
    expect(capitalize(66)).toBe('Your input is not a string');
});

test