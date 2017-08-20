exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this,arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {
    var argumentos = Array.prototype.slice.call(arguments);
    return argumentos.reduce(function(sum, element){
        return sum+element;
    })
  },

  callIt: function(fn) {
    var argumentos = Array.prototype.slice.call(arguments);
    argumentos.shift();
    fn.apply(null, argumentos);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {
    
  }
};
