"use strict";

 var lPF = (function(n){

  var primeNumber;
  var primeNums = [];

  var isPrime = function (x){
    for ( var i = 2; i < x; i++){
      if ( x % i === 0){
        return false;
      }
    }
    return true;
  };

    // Build an array of prime numbers.
  function buildArr(n){
    for (i = 2; i < n; i++){
      if (isPrime(i)) {
        primeNums.push(i);
      }
    }
  }

    // Loop through primNums array, pulling factors into it's own array. Return the last value on that array.
  function findFactor(){
    var factorArr = [];

    for (var i = 0; i < primeNums.length; i++){
    if (n % primeNums[i] === 0){
      factorArr.push(primeNums[i]);
    }
   }
   return (factorArr[factorArr.length-1]);
  }

  buildArr(n);
  var result = findFactor();
  return result;

});


exports.largestPrimeFactor = lPF;
