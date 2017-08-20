exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
   //con expresion regular
  },

  wordWrap: function(str, cols) {
    //con expresion regular
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
