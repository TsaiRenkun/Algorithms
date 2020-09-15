function areThereDuplicates() {
    let collection = {}

    for(let val in arguments){
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true;
    }
    return false
    //create object to and check if values are repeated
    // good luck. (supply any arguments you deem necessary.)
  }

console.log(areThereDuplicates("a","b","c","c"))
// areThereDuplicates(1,2,2)