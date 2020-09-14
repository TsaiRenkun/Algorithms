[1,1,1,2,2,3,3,4,4,5,6]


function countUnquieValue(arr){
    if(arr.length === 0) return 0;

    let counter = 0;
    let scout = 1;

    while(scout < arr.length){
        if(arr[counter] === arr[scout]){
            scout++
        }
        else if(arr[counter] != arr[scout]){
            counter++
            arr[counter] = arr[scout]
        }
    }
    return counter + 1
}

console.log(countUnquieValue([1,1,1,2,2,3,3,4,4,5,6,7,8,9,10]))