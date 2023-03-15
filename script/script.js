// get elements
const outputEl = document.getElementById('output');
const copyBtnEl = document.getElementById('btn-copy');
const passwordLengthEl = document.getElementById('length');
const numberEl = document.getElementById('numbers');
const capitalEl = document.getElementById('capital-letters');
const smallEl = document.getElementById('small-letters');
const symbolEl = document.getElementById('symbols');
const formEl = document.getElementById('frm');

// event listeners
// click cpy button to cpy password
copyBtnEl.addEventListener('click', async () => {
  const password = outputEl.value;

  // validation
  if (password) {
    await navigator.clipboard.writeText(password);
    alert('copied to clipboard');
  } else {
    alert('There is no password to copy');
  }
});

// functions

function generateRandomChar(min, max) {
  const limit = max - min + 1;
  // (90-65)+1= 26 letters
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

// capital letter fun
function capitalValue() {
  return generateRandomChar(65, 90);
}

// small letter fun
function smallValue() {
  return generateRandomChar(97, 122);
}

// number fun
function numberValue() {
  return generateRandomChar(48, 57);
}

//  symbol fun
function symbolValue() {
  const symbols = '! @#$%^&*()_';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// create an object array
// key value pairs

const functionArray = [
  {
    element: numberEl,
    fun: numberValue,
  },
  {
    element: capitalEl,
    fun: capitalValue,
  },
  {
    element: smallEl,
    fun: smallValue,
  },
  {
    element: symbolEl,
    fun: symbolValue,
  },
];

// form event listener
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const pasLength = passwordLengthEl.value;

  let generatedPassword = '';

  const funArray = functionArray.filter(({ element }) => element.checked);

  // for loop
  for (i = 0; i < pasLength; i++) {
    const index = Math.floor(Math.random() * funArray.length);

    const letter = funArray[index].fun();
    generatedPassword += letter;
  }

  outputEl.value = generatedPassword;
});

// string.fromCharCode(65)- 'A'
// string.fromCharcode(97)-'a'
// ASCII - American Standard Code For Information Interchange

// 0-128
// 0-255

// 65-90 - A-Z
// 97-122 - a-z
// 48-57 - 0-9
// 32 - space
