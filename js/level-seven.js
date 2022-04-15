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
  