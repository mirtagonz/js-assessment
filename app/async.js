exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var promise = new Promise(function(solve, error){
        solve(value);
        error('Error');
    })
    return promise;
  },

  manipulateRemoteData: function(url) {
  
  }
};
