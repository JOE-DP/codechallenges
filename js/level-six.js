// codewars level 6 - https://www.codewars.com/kata/6138ee916cb50f00227648d9/train/javascript

function joust(listField, vKnightLeft, vKnightRight) {
	if(listField[0].length / 2 < 3 || vKnightLeft == 0 && vKnightRight == 0 ){
    return listField
  }
    
  while(listField[0].indexOf(">") < listField[1].indexOf("<")){
   listField[0] = " ".repeat(vKnightLeft) + listField[0].split("").reverse().slice(vKnightLeft).reverse().join("")
   listField[1] = listField[1].split("").slice(vKnightRight).join("") + " ".repeat(vKnightRight)
  }

  return listField

}  
 

// codewars level 6 challenge - https://www.codewars.com/kata/57f4ccf0ab9a91c3d5000054/train/javascript - introduction to chmod

function chmodCalculator(perm) {
    if(!perm.group){
      perm.group = '---'
    }
     if(!perm.user){
      perm.user = '---'
    }
     if(!perm.other){
      perm.other = '---'
    }
    
    let user = perm.user.split("")
    let group = perm.group.split("")
    let other = perm.other.split("")
    
    function digit(group){
      return group.map(item => {
        if(item == "r"){
          return 4
        } else if(item == "w"){
          return 2
        } else if(item == "x"){
          return 1
        } else {
          return 0
        }
      }).reduce((curr, prev) => curr + prev)
    }
    
    return (`${digit(user)}${digit(group)}${digit(other)}`)
  }

  

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