function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// same([1,2,3,2,5], [9,1,4,4,11])


function validAnagram(str1, str2) {
    //check if the length of both strings are the same
    if(str1.length !== str2.length){
        return false
    }
    //create a object to store the letters in each string as a key
    var obj1 = {}
    var obj2 = {}
    for (var key in str1){
        obj1[str1[key]] = (obj1[str1[key]] || 0) + 1
    }
    for (var key in str2){
        obj2[str2[key]] = (obj2[str2[key]] || 0) + 1
    }

    console.log(obj1)
    console.log(obj2)

    //then compare both objects and keys to see if they match
    for(var key in obj1){
        if(!(key in obj2)){
            return false
        }
    }
    //return 
    return true
}

console.log(validAnagram("cat", "cat"))