function maxSubarraySum(arr, num){
    //make sure num is smaller then arr.length
    if(arr.length < num) return null;
    //finding the subarray
    let total = 0
    for(i = 0; i < num; i++){
        total += arr[i]
    }
    let currentTotal = total
    for(i = num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i-num]
        total = Math.max(total, currentTotal);
       
    }
    return total
    // add whatever parameters you deem necessary - good luck!
  }


maxSubarraySum([100,200,300,400],2)
// maxSubarraySum([1,4,2,10,23,3,1,0,20],4)
// maxSubarraySum([-3,4,0,-2,6,-1],2)
// maxSubarraySum([2,3],3)