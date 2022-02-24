// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const matrix = [[`a`,`b`,`c`,`d`,`e`],[`f`,`g`,`h`,`i`,`k`],[`l`,`m`,`n`,`o`,`p`],[`q`,`r`,`s`,`t`,`u`],[`v`,`w`,`x`,`y`,`z`]];

  function polybius(input, encode = true) {
    //your solution code here
     let newStr = "";
    if(encode) {
      const str = input.toLowerCase();
      for(let i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) < 97 || str.charCodeAt(i) > 122) {
          newStr += str.charAt(i);
        } else {
          for(let j = 0; j < matrix.length; j++) {
            let index = matrix[j].indexOf(str.charAt(i));
            if(str.charAt(i) == 'j') {
              index = matrix[j].indexOf('i');
            }
            if(index > -1) {
              newStr += index + 1;
              newStr += j + 1;
            }
          }
        }
      }
    } else {
      const str = input;
      if(str.replace(' ', '').length % 2 != 0) return false;
      // console.log(str);
      for(let i = 0; i + 1 < str.length; i++) {
        if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
          newStr += str.charAt(i);
        } else {
          const newChar = matrix[parseInt(str.charAt(i + 1)) - 1][parseInt(str.charAt(i)) - 1];
          // console.log(newChar);
          newChar == 'i' ? (newStr += "i/j") : (newStr += newChar);
          i++;
        }
      }
    }
    return newStr;
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
