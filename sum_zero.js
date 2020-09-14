function sum_zero(arr){
    //split array into 2
    let left = 0;
    let right = arr.length - 1
    //counting from the left 
    //counting from the right
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0 ){
            return [[arr[left],arr[right]]]
        }
        else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sum_zero([-4,-3,-2,0,1,3,5]))