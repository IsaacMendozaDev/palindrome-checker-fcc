$textInput = document.getElementById("text-input");
$resultText = document.getElementById("result");
$checkBtn = document.getElementById("check-btn");

const isPalindrome = (word) => {
  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord;
};

const filterWord = (word) => {
  const invalidCharacters = /[^a-z0-9]/gi;
  const cleanWord = word.replace(invalidCharacters, "");

  return cleanWord;
};

const displayResultText = (boolean, word) => {
  if (boolean) {
    $resultText.innerText = `${word} is a palindrome`;
    return;
  }

  $resultText.innerText = `${word} is not a palindrome`;
};

const reset = () => {
  $textInput.value = "";
};

$checkBtn.addEventListener("click", () => {
  const word = $textInput.value;

  $resultText.innerText = "";

  if (!word) return alert("Please input a value");

  const cleanWord = filterWord(word.toLowerCase());

  const isPalindromeOrNot = isPalindrome(cleanWord);
  console.log(isPalindromeOrNot);

  displayResultText(isPalindromeOrNot, word);

  reset();
});
$textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const word = $textInput.value;

    $resultText.innerText = "";

    if (!word) return alert("Please input a value");

    const cleanWord = filterWord(word.toLowerCase());

    const isPalindromeOrNot = isPalindrome(cleanWord);
    console.log(isPalindromeOrNot);

    displayResultText(isPalindromeOrNot, word);

    reset();
  }
});
