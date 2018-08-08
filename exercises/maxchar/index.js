// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const objectOfChar = {}
  let maxCharacter = ""
  let maxNum = 0

  for (let char of str) {
    // if object does not have own property of char, set key to char and value to 1
    // otherwise increment value
    if (!objectOfChar.hasOwnProperty(char)) objectOfChar[char] = 1
    else objectOfChar[char]++

    // check the value of the char if it's bigger than maxNum
    // set the new maxNum and maxCharacter
    if (objectOfChar[char] > maxNum) {
      maxNum = objectOfChar[char]
      maxCharacter = char
    }
  }

  return maxCharacter
}

module.exports = maxChar;
