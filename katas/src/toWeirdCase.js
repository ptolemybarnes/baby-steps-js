
module.exports = function toWeirdCase(string) {
 return string.split(" ").map(function(word) {
   return singleWordToWeirdCase(word);
 }).join(" ");
}

function singleWordToWeirdCase(word) {
  var idx = -1;
  return word.split("").map(function(char) {
    idx ++; 
    if(idx % 2 == 0) { 
      return char.toUpperCase() }
    else { 
      return char }
  }).join("");
}




