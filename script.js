var storeNumber = {};
function calculateIt(num1, num2, operationSign){
  const operat = {
    '+': function(num1, num2){
      return num1 + num2;
    }, 
    '*': function(num1, num2){
      return num1 * num2;
    },
    '-': function(num1, num2){
      return num1 - num2;
    },
    '/': function( num1, num2 ){
      return num1 / num2;
    }
  }
  var x = operat[operationSign];
  var y = 1;
  return x(num1,num2);
}

const keys = Array.from(document.querySelectorAll('.button'));
keys.forEach(key => key.addEventListener('click', function(e) {
      identifyInputType(e);
    }));

sessionStorage.setItem('firstNumber', null);
sessionStorage.setItem('secondNumber', null);
sessionStorage.setItem('sign', null);

function storeIt(num){
  var currentNumber = sessionStorage.getItem('firstNumber');
  if (JSON.parse(currentNumber) === null){
    sessionStorage.setItem('firstNumber',num);
  } else {
    sessionStorage.setItem('firstNumber', currentNumber.concat(num))
  }
  currentNumber = sessionStorage.getItem('firstNumber')
  return currentNumber;
}
function identifyInputType(e){
  const inputValue = e.toElement.firstChild.nodeType === 3 ? e.toElement.parentElement.dataset.key : e.target.dataset.key;
  const regEx = /\d/;
  const regExSign = /[\+\-\*\/]/;
  const regExEqual = /\=/;
  const regExClear = /C/;
  if (regEx.test(inputValue)){
    var newNumber = storeIt(inputValue);
    displayKey(newNumber);
  }
  if (regExSign.test(inputValue)){
    addSecondNumber(inputValue);
  }
  if (regExEqual.test(inputValue)){
    var firstValue = parseInt(sessionStorage.getItem('secondNumber'));
    var secondValue = parseInt(sessionStorage.getItem('firstNumber'));
    var operationSign = sessionStorage.getItem('sign');
    var answer = calculateIt(firstValue,secondValue,operationSign);
    var screenDisplay = document.getElementById('digits');
    screenDisplay.innerHTML = inputValue;
    displayKey(answer);
    sessionStorage.clear();
  }
  if (regExClear.test(inputValue)){
    sessionStorage.clear();
    displayKey('');
  }
}

function displayKey(inputValue){
  const screenDisplay = document.getElementById('digits');
  screenDisplay.innerHTML = inputValue;
}

function addSecondNumber(sign){
  var temp = sessionStorage.getItem('firstNumber');
  sessionStorage.setItem('secondNumber', temp);
  sessionStorage.setItem('firstNumber', null);
  sessionStorage.setItem('sign', sign);
}


