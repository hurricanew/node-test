function capitalize(str) {
    var firstLetter = str[0].toUpperCase();
    var rest = str.slice(1).toLowerCase();
    console.log(firstLetter+rest);
    return firstLetter + rest;

  }
  
  module.exports = capitalize;