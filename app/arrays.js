exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(sum, element){ return sum + element; });
  },

  remove: function(arr, item) {
    var result = arr.filter(function(element){
      return element!==item;
    })
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    for(var index = 0; index < arr.length; index++){
      if(arr[index]===item) {
          arr.splice(index,1);
          index--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(element){
      return element===item;
    }).length;
  },

  duplicates: function(arr) {
    var tmp = [];
    var result = [];
    arr.forEach(function(element) {
      if(tmp.indexOf(element)>=0 && result.indexOf(element)===-1){
        result.push(element);
      }else{
        tmp.push(element);
      }
    }, this);
    return result;
  },

  square: function(arr) {
    return arr.map(function(element){
      return Math.pow(element,2);
    })
  },

  findAllOccurrences: function(arr, target) {
    var result=[];
    arr.forEach(function(element, index){
      if(element===target)
        result.push(index);
    })
    return result;
  }
};
