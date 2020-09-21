function isSubsequence(word1, word2) {
  //Take in 2 String
  if(word1.length > word2.length){
    return false
  }
  // console.log(word2.length)

  let wordBank1 = word1.split("");
  let wordBank2 = word2.split("");

  let base = 0;
  let checker = 0;

  while (base < word1.length && checker < word2.length) {
    if (wordBank1[base] != wordBank2[checker]) {
      checker++;
    } else if (wordBank1[base] === wordBank2[checker]) {
      base++;
    }
  }

  if (base === word1.length) {
    return true;
  } else {
    return false;
  }
}

//Create 2 objs to hold both strings
//Each having a key and index
//check if the obj1 key matches obj2 key
// good luck. Add any arguments you deem necessary

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));

