// codewars level 6 challenge -  https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript sum all numbers in a range, which are multiples of 3 or 5. Additionally negative numbers are 0.


function solution(number){
    let arr = []
  for(i = 1; i < number; i++){
        arr.push(i)
  }
// edge case where it is an empty array, so reduce returns an error - if statement to return 0 if empty array

  return arr.filter(item =>  item > 0 && item % 5 == 0 || item % 3 == 0).reduce((prev, curr) => prev + curr)
}

//number(10)