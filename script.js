  var storeNumber = {};
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
    }}

  var aNumber = document.querySelectorAll('.number');
  const keys = Array.from(document.querySelectorAll('.button'));
  keys.forEach(key => key.addEventListener('click', function(e) {
    // console.log("clicked");
    identifyInputType(e);
  }));

//       element.addEventListener('event', function() {

//      invokeMe();
//      alsoInvokeMe();

// });
  function identifyInputType(e){
    const inputValue = e.target.dataset.key;

    const regEx = /\d/;
    const regExSign = /[\+\-\*\/]/;
    const regExEqual = /\=/;
    const regExClear = /C/;
    console.log(inputValue);
    if (regEx.test(inputValue)){
      console.log('number');
    }
    if (regExSign.test(inputValue)){
      console.log('sign');
    }
    if (regExEqual.test(inputValue)){
      console.log('equals')
    }
    if (regExClear.test(inputValue)){
      console.log('clear')
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
  // function displayKey(inputValue){
  //   const screenDisplay = document.getElementById('digits');
  //   screenDisplay.innerHTML = inputValue;
  // }



  // function runIt(num1, num2, oper){

  //   return operat[oper](num1,num2);
  // }
  // var answer = runIt(4,4,'/');
  // console.log(answer);
  // console.log(Object.keys(operat))
