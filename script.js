const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = arrOne.filter(function(num) {
  return num % 2 !== 0;
});

console.log(oddNumbers);

//--------

const strArr = ["hello", "world", "javascript", "functions"];

const titleCapsArr = strArr.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCapsArr); 

//-------

const arrTwo = [1, 2, 3, 4, 5];

const sum = arrTwo.reduce(function(acc, num) {
  return acc + num;
}, 0);

console.log(sum); 

//--------- 

const arrThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = function(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeNumbers = arrThree.filter(function(num) {
  return isPrime(num);
});

console.log(primeNumbers); 

//-----------

const arrFour = ["level", "noon", "hello", "world", "deified"];

const isPalindrome = function(str) {
  return str === str.split("").reverse().join("");
};

const palindromeArr = arrFour.filter(function(str) {
  return isPalindrome(str);
});

console.log(palindromeArr); 

//--------- 

const aOne = [1, 3, 5];
const aTwo = [2, 4, 6];

const mergedArr = [...aOne, ...aTwo].sort(function(a, b) {
  return a - b;
});

const median = (mergedArr[Math.floor((mergedArr.length - 1) / 2)] + mergedArr[Math.ceil((mergedArr.length - 1) / 2)]) / 2;

console.log(median); 

//--------------------------

const arrFive = [1, 2, 3, 4, 3, 2, 5, 6, 1];

const uniqueArr = arrFive.filter(function(item, index) {
  return arrFive.indexOf(item) === index;
});

console.log(uniqueArr);

//--------------------------

const arrSix = [1, 2, 3, 4, 5];
const k = 2;

for (let i = 0; i < k; i++) {
  arrSix.unshift(arrSix.pop());
}

console.log(arrSix); 
 