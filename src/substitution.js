// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const standardAlpha ="abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (alphabet == undefined || alphabet.length != 26 || alphabet.length != (new Set(alphabet)).size) {
      return false;
    }else {
      alphabet = alphabet.toLowerCase();
    }

    const str = input.toLowerCase();
    let newStr = "";

    if(encode) {
      for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') newStr += ' ';
        newStr += alphabet.charAt(standardAlpha.indexOf(str.charAt(i)));
      }
    }else {
      for(let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") newStr += " ";
        newStr += standardAlpha.charAt(alphabet.indexOf(str.charAt(i)));
      }
    }
    return newStr;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
