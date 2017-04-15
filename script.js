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

  var aNumber = document.querySelectorAll('.number');
  const keys = Array.from(document.querySelectorAll('.button'));
  keys.forEach(key => key.addEventListener('click', function(e) {
    // console.log("clicked");
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
    const inputValue = e.target.dataset.key;
    console.log(inputValue);
    const regEx = /\d/;
    const regExSign = /[\+\-\*\/]/;
    const regExEqual = /\=/;
    const regExClear = /C/;
    console.log(inputValue);
    if (regEx.test(inputValue)){
      var newNumber = storeIt(inputValue);
      console.log("newNUmber=" + newNumber);
      displayKey(newNumber);
    }
    if (regExSign.test(inputValue)){
      addSecondNumber(inputValue);
    }
    if (regExEqual.test(inputValue)){
      console.log('equals');
      var firstValue = parseInt(sessionStorage.getItem('secondNumber'));
      var secondValue = parseInt(sessionStorage.getItem('firstNumber'));
      var operationSign = sessionStorage.getItem('sign');
      var answer = calculateIt(firstValue,secondValue,operationSign);
        var screenDisplay = document.getElementById('digits');
    screenDisplay.innerHTML = inputValue;
      displayKey(answer);
    }
    if (regExClear.test(inputValue)){
      console.log('clear');
      sessionStorage.clear();
      displayKey('');
    }
  }


  //   switch (inputValue) {
  //     case input'Oranges':
  //   console.log('Oranges are $0.59 a pound.');
  //   break;
  //   var y = parseInt(inputValue);
  //   if (inputValue.test(regEx))
  //   if (isNaN(y)){
  //     displayKey(inputValue);
  //   createNumber(numberValue);
  // }

  // function createCalculation(numberValue){
// var audio = document.querySelector(`div[data-key="${e.keyCode}"]`);
// var xxx = document.querySelector("[data-key]").value;
  //   if (sessionStorage.getItem('firstNumber')){
  //     var firstItem = sessionStorage.get('firstNumber');

  //   } else {
  //     sessionStorage.setItem = ('firstNumber',inputValue);
  //   }
  // }
  // function createNumber(inputValue){
 
  //   if (inputValue.test(regEx)){
  //     sessionStorage.setItem = ('firstNumber',inputValue);
  //   }
  // }
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


  // function runIt(num1, num2, oper){

  //   return operat[oper](num1,num2);
  // }
  // var answer = runIt(4,4,'/');
  // console.log(answer);
  // console.log(Object.keys(operat))

