// codewars level 7 challenge - https://www.codewars.com/kata/5966f6343c0702d1dc00004c - break a number down into the smallest required change

function giveChange(amount) {
let returnChange = [0, 0, 0, 0, 0, 0];
  function subtractChange(value, index){
    let num = Math.floor(amount/value);
    returnChange[index] = num;
    amount = amount - (num * value)
  }
  subtractChange(100, 0);
  subtractChange(50, 1);
  subtractChange(20, 2);
  subtractChange(10, 3);
  subtractChange(5, 4);
  subtractChange(1, 5);
  
  return returnChange

}


// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills


// codewars level 7 challenge -  https://www.codewars.com/kata/55de6173a8fbe814ee000061 - Given an array of numbers, return an array of all single numeric digits whicha arent in the original array.

// the rest parameter needed to be used to handle an unknown number od args

function unusedDigits(...nums){
 
    let arr = [];
  
    for(let i = 0; i < 10; i ++){
      if(!String(nums).includes(i)){
        arr.push(i);
      }
    }
    
    return arr.join("")
  
  }
  