function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
      throw 'String is empty or the length is greater than 10 characters';
    }
  return string.length;
 }
 
 module.exports = stringLength;