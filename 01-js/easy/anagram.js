/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();
  let arr = []
  for(let i=0;i<s1.length;i++){
    arr.push(s1[i]);
  }
  for(let i=0;i<s2.length;i++){
    const x = arr.indexOf(s2[i]);
    if(x==-1){ return false;}
    arr.splice(x, 1);
  }
  if(arr.length!=0){ return false; }
  return true;
}

module.exports = isAnagram;
