// palindrome code
// function isPalindrome(word) {
//     word = word.toLowerCase(); // Convert the word to lowercase
//     var reversedWord = word.split('').reverse().join(''); // Reverse the word
//     return word === reversedWord;
//   }
  
//   // Test the function
//   var word = prompt("Enter a word: ");
//   if (isPalindrome(word)) {
//     console.log(word + " is a palindrome.");
//   } else {
//     console.log(word + " is not a palindrome.");
//   }
let value = document.querySelector(".value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let count = 0;
let counter = 0;

decrease.addEventListener("click", () => {
  // value.style.color = "red";
  if (count <= 0) {
    value.textContent = 0;
  } else {
    count = count - 1;
    value.textContent = count;
    console.log(count);
  }
});
increase.addEventListener("click", () => {
  count = count + 1;
  value.textContent = count;
  // value.style.color = "green";
});
reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
  // value.style.color = "white";
});