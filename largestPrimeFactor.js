"use strict";

 var lPF = (function(n){

  var primeNumber;
  var primeNums = [];

  // is n a prime #??

  // if n is not prime, what is it's smallest factor?
  // add smallest factor, and test result again


  var isPrime = function (x){
    for ( var i = 2; i < x; i++){
      if ( x % i === 0){
        return false;
      }
    }
    return true;
  };

    // Created our newly enclosed dependency, we will build an array of prime numbers.
  function buildArr(n){
    for (i = 2; i < n; i++){
      if (isPrime(i)) {
        primeNums.push(i);
      }
    }
  }

    // Then we'll loop through primNums array, we just created, and sort out the factors. From this array we'll grab the highest factor.
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
