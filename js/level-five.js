// codewars level 5 challenge - https://www.codewars.com/kata/5581e52ac76ffdea700000c1 - This one is really interesting, looking at cellular automation and undertanding rule 30.
function rule30(list, n){
    let rule30Obj = {
        "000": 0,
        "001": 1,
        "010": 1,
        "011": 1,
        "100": 1,
        "101": 0,
        "110": 0,
        "111": 0
    }  
        // function to run a line of cellular automation
    function cellLine(list){
        let resultArr = [];
        list.push(0, 0);
        list.unshift(0, 0);
        for(let i = 1; i < list.length -1; i++){
        let neighborCells = [list[i-1], list[i], list[i+1]]
        resultArr.push(rule30Obj[neighborCells.join("")]);
        }
  		return resultArr
    }
    // function to run the cellLine function n times
    for(let j = 0; j < n ; j++){
       list = cellLine(list)
    }
    return list
  }

// codewars level 5 challenge - https://www.codewars.com/kata/525c65e51bf619685c000059/javascript - comparing 2 objects

function cakes(recipe, available) {
    let recipeArr = Object.keys(recipe);
    
// this for loop handles cases of available.prop not existing, or available prop == 0

    for(let i = 0; i < recipeArr.length; i++){
        if(available[recipeArr[i]] == 0 || !available.hasOwnProperty(recipeArr(i))){
            return 0
        }
    }

    return Math.min(...recipeArr.filter(item => available[item] > 0).map(item => Math.floor(available[item] / recipe[item])))
    
    }
    
    // cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 