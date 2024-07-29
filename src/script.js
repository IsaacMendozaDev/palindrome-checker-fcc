const $textInput = document.getElementById("text-input");
const $resultText = document.getElementById("result");
const $checkBtn = document.getElementById("check-btn");

const isPalindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord;
};

const filterWord = (word) => {
  const invalidCharacters = /[\W_]/g;
  const cleanWord = word.replace(invalidCharacters, "");

  return cleanWord;
};

const displayResultText = (boolean, word) => {
  const msg = boolean
    ? `<span class="good">${word}</span> is a palindrome`
    : `<span class="bad">${word}</span> is not a palindrome`;

  $resultText.innerHTML = msg;
  setTimeout(() => {
    $resultText.style.width = "auto";
    $resultText.style.animation = "";
  }, 100);
};

const reset = () => {
  $textInput.value = "";
  $resultText.innerHTML = "";
  $resultText.style.width = 0;
  $resultText.style.animation = "none";
};

const validInput = () => {
  const word = $textInput.value;

  if (!word) return alert("Please input a value");
  reset();

  const cleanWord = filterWord(word.toLowerCase());
  const isPalindromeOrNot = isPalindrome(cleanWord);

  displayResultText(isPalindromeOrNot, word);
};

$checkBtn.addEventListener("click", validInput);

$textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    validInput();
  }
});
