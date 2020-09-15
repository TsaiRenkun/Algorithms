function averagePair(arr, num){
    //check if arr length != 0
    if(arr.length === 0) return false;

    let start = 0;

    let end = arr.length - 1 

    while (start < end){
        let avg = (arr[start] + arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num){
            start++
        } else {
            end--
        }
    }
    return false
    //break array up starting from front and back
    // add whatever parameters you deem necessary - good luck!
  }

  console.log(averagePair([1,2,3], 2.5))