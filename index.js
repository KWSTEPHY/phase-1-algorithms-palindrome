
  // Write your algorithm here
  function isPalindrome(word) {
    // Convert the string to lowercase
    str = word.toLowerCase();

    // Initialize pointers for the start and end of the string
    let start = 0;
    let end = word.length - 1;

    // Iterate over the string until the pointers meet
    while (start < end) {
        // If characters at the current positions don't match, return false
        if (word[start] !== word[end]) {
            return false;
        }
        // Move the pointers inward
        start++;
        end--;
    }
    // If the loop completes without returning false, the string is a palindrome
    return true;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
