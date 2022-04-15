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
    
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 