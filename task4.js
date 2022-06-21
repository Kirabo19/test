const capitalize = (string) => {
    if (typeof string === 'string') {
        const capital = string.charAt(0).toLocaleUpperCase()
        const restOfString = string.toLocaleLowerCase().slice(1);
        return capital.concat(restOfString);
    } else {
        return 'Your input is not a string';
    }
}

module.exports = capitalize;