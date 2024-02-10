/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function anagram(str1, str2){
  if(str1.length != str2.length){
    console.log("Input ERROR");
  }

  let sortStr1 = str1.split('').sort().join('');
  let sortStr2 = str2.split('').sort().join('');
  console.log(sortStr1)
  console.log(sortStr2)
  return sortStr1 === sortStr2;
  
}  

  
  const string1 = "abcdefghijklmnopqrstuvwxyz";
  const string2 = "zyxwvutsrqponmlkjihgfedcba";

  if(anagram(string1, string2)){
    console.log(`True ${string1} and ${string2} are anagrams`);
  }else{
    console.log(`False ${string1} and ${string2} are not anagrams`)}

module.exports = isAnagram;
