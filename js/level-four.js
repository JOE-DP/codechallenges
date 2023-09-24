// codewars level 4 challenge - https://www.codewars.com/kata/52996b5c99fdcb5f20000004/train/javascript 

function runoff(voters){
    let votesThreshold = voters.length/2;
    let answer = 0;
    let newVoters =[...voters] 
    //function for turning top votes into an object
    let topObj = function(currentvotes){
    obj = {}
    //map votes to obj
    for(let i = 0; i < currentvotes.length; i++){
        if(obj[currentvotes[i][0]]){
            obj[currentvotes[i][0]]++;
        }
        else{
            obj[currentvotes[i][0]] = 1; 
        }
    }
    return obj
}
    // check for 50%
    function fiftyCheck(topvotes){
        let objKeys = Object.keys(topvotes)
        for(let i = 0; i < objKeys.length; i++){
            if(topvotes[objKeys[i]] > votesThreshold){
                answer = objKeys[i]
            }
        }
            }

        fiftyCheck(topObj(voters))
        if(answer == 0){
            let highestVoters = topObj(newVoters);
            
        }
        console.log(answer)
    
      }

runoff([ [ 'd', 'a', 'e', 'b', 'c' ],
[ 'b', 'e', 'd', 'c', 'a' ],
[ 'e', 'a', 'c', 'b', 'd' ],
[ 'e', 'd', 'a', 'b', 'c' ],
[ 'd', 'b', 'a', 'e', 'c' ] ])

