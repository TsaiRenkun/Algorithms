/* 
1. Add 2 numbers together implement addition
2. ints?, floats?, what about string for large numvers?
3. int?, floats?, string?
4. 
5. 
*/
console.log("hello working")

const charCount = (str) => {
    //make object to return at the end
    var result = {}
    //loop over string, for each character..
    for(i = 0; i < str.length; i++) {
        var char = str[i]
        //if the char is a number/letter AND is a key in object, add one to count
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++;
            }
            //if the char is a number/letter AND not in object, add it to object and set value to 1
            else {
                result[char] = 1;
            };
        }
    }
        //if character is something else (space) dont do anything
        
    //return object at end
    return result;
}


const countMoney = (obj) => {
    //make object to return at the end
    var result = {}
    //loop over string, for each character..
    for(i = 0; i < obj.length; i++) {
        var char = obj[i].currency
        //if the currency key already exist add amount
        if(result[char] >= 0){
            result[char] += parseInt(obj[i].amount);
        }
        //if the currency key not in object, add it to object and set value to it's amount
        else {
            result[char] = parseInt(obj[i].amount);
        };
    }   
    //return object at end
    return result;
}

console.log(countMoney([{currency: "usd" , amount: 20},{currency: "usd" , amount: 20},{currency: "usd" , amount: 20},{currency: "usd" , amount: 20}]))
console.log(charCount("hello there"))