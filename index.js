// Collections Functions (Array or Object)
// standardizeInput is a helper function to use with the functions that need to
// work with either objects or arrays
// It checks whether the input is an array and, if so, returns a copy of it;
// otherwise, it uses JavaScript's Object.values method to return an array that
// contains the values of the object's properties
const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  const myEach = function(collection, callback) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
    return collection;
  }

//  EXAMPLE


// myEach([1,2,3], alert);
// myEach({one: 1,two: 2, three:}, alert);

  const myMap = function(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
    return newArr;
  }
  const myReduce = function(collection, callback, acc) {
    let newCollection = standardizeInput(collection);


    // The if statement below handles the case where no start value is passed in  for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already been accounted for


    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
  const myFind = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
    return undefined;
  }
  const myFilter = function(collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
    return newArr;
  }
  const mySize = function(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
  // Array Functions
  const myFirst = function(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  const myLast = function(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  const mySortBy = function(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }

    });
  }

  const myKeys = function(collection) {
    if (Array.isArray(collection)) {
      return collection;
    } else {
      return Object.keys(collection);
    }
  };
  
  const myValues = function(collection) {
    if (Array.isArray(collection)) {
      return collection;
    } else {
      return Object.values(collection);
    }
  };
  