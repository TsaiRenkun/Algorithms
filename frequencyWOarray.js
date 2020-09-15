function sameFrequency(arr1 ,arr2){
    //Check if length is the same if not return false
        if(arr1.toString().length !== arr2.toString().length) return false;
    //Create and object to store both array numbers and keys
    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let val of arr1.toString()){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for(let val of arr2.toString()){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    for(let key in freqCounter1){  
        if(!(key in freqCounter2)){
            return false
        }
        if(freqCounter2[key] !== freqCounter1[key]){
            return false
        }
    }
    return true
    //Compare this objects
      // good luck. Add any arguments you deem necessary.
    }

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,13))
console.log(sameFrequency(120,1445))

// sameFrequency(34,14)