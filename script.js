const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv  = document.getElementById("results-div");

checkBtn.addEventListener('click', () => checkBtnHandler());
clearBtn.addEventListener('click', () => clearBtnHandler());

const validNumbersExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

const checkBtnHandler = () => {
  const inputValue = userInput.value.trim();

  if (!inputValue) {
    window.alert("Please provide a phone number");
  } else if (validNumbersExp.test(inputValue)) {
    resultsDiv.innerHTML += `<p>Valid US number: ${inputValue}</p>`;
  }
  else {
    resultsDiv.innerHTML += `<p>Invalid US number: ${inputValue}</p>`;
  }
};

const clearBtnHandler = () => {
  resultsDiv.textContent = "";
}
