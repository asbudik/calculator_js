
window.onload = function() {
  
  var numOne = document.getElementsByClassName("button");

  var add = document.getElementsByClassName("button")[3];
  var multiply = document.getElementsByClassName("button")[11];
  var subtract = document.getElementsByClassName("button")[7];
  var divide = document.getElementsByClassName("button")[15];

  var opDisplay = document.getElementById("operator_display");
  var clear = document.getElementsByClassName("button")[12];
  var equal = document.getElementsByClassName("button")[14];

  var firstNum = 0;
  var secondNum = 0;
  var storeNum = "";
  var operator = "";
  var result = document.getElementById("result_display_value");


  var handleNumberClick = function(numberElement) {
    storeNum += numberElement;
    result.innerHTML = storeNum;
  }

  numOne[0].onclick = function(event) {
    handleNumberClick(numOne[0].innerHTML);
  };
  numOne[1].onclick = function(event) {
    handleNumberClick(numOne[1].innerHTML);
  };
  numOne[2].onclick = function(event) {
    handleNumberClick(numOne[2].innerHTML);
  };
  numOne[4].onclick = function(event) {
    handleNumberClick(numOne[4].innerHTML);
  };
  numOne[5].onclick = function(event) {
    handleNumberClick(numOne[5].innerHTML);
  };
  numOne[6].onclick = function(event) {
    handleNumberClick(numOne[6].innerHTML);
  };
  numOne[8].onclick = function(event) {
    handleNumberClick(numOne[8].innerHTML);
  };
  numOne[9].onclick = function(event) {
    handleNumberClick(numOne[9].innerHTML);
  };
  numOne[10].onclick = function(event) {
    handleNumberClick(numOne[10].innerHTML);
  };
  numOne[13].onclick = function(event) {
    handleNumberClick(numOne[13].innerHTML);
  };


  var operatorAction = function(operatorString, operatorDisplay) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = operatorString;
    opDisplay.innerHTML = operatorDisplay;
  }

  add.onclick = function(event) {
    operatorAction("addition", add.innerHTML);
  };


  subtract.onclick = function(event) {
    operatorAction("subtraction", subtract.innerHTML);
  };

  multiply.onclick = function(event) {
    operatorAction("multiplication", multiply.innerHTML);
  };

  divide.onclick = function(event) {
    operatorAction("division", divide.innerHTML);
  };

  equal.onclick = function(event) {
    secondNum = parseInt(storeNum);
    storeNum = "";
    opDisplay.innerHTML = "";


    if (operator === "addition") {
      result.innerHTML = firstNum + secondNum;
    }
    else if (operator === "subtraction") {
      result.innerHTML = firstNum - secondNum;
    }
    else if (operator === "multiplication") {
      result.innerHTML = firstNum * secondNum;
    }
    else if (operator === "division") {
      result.innerHTML = firstNum / secondNum;
    }
  };

  clear.onclick = function(event) {
    firstNum = 0;
    secondNum = 0;
    storeNum = "";
    operator = "";
    result.innerHTML = "";
    opDisplay.innerHTML = "";
  };
};