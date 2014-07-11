
window.onload = function() {
  
  var numOne = document.getElementsByClassName("button")[0];
  var numTwo = document.getElementsByClassName("button")[1];
  var numThree = document.getElementsByClassName("button")[2];
  var numFour = document.getElementsByClassName("button")[4];
  var numFive = document.getElementsByClassName("button")[5];
  var numSix = document.getElementsByClassName("button")[6];
  var numSeven = document.getElementsByClassName("button")[8];
  var numEight = document.getElementsByClassName("button")[9];
  var numNine = document.getElementsByClassName("button")[10];
  var numZero = document.getElementsByClassName("button")[13];

  var add = document.getElementsByClassName("button")[3];
  var multiply = document.getElementsByClassName("button")[11];
  var subtract = document.getElementsByClassName("button")[7];
  var divide = document.getElementsByClassName("button")[15];

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

  numOne.onclick = function(event) {
    handleNumberClick(numOne.innerHTML);
  };
  numTwo.onclick = function(event) {
    handleNumberClick(numTwo.innerHTML);
  };
  numThree.onclick = function(event) {
    handleNumberClick(numThree.innerHTML);
  };
  numFour.onclick = function(event) {
    handleNumberClick(numFour.innerHTML);
  };
  numFive.onclick = function(event) {
    handleNumberClick(numFive.innerHTML);
  };
  numSix.onclick = function(event) {
    handleNumberClick(numSix.innerHTML);
  };
  numSeven.onclick = function(event) {
    handleNumberClick(numSeven.innerHTML);
  };
  numEight.onclick = function(event) {
    handleNumberClick(numEight.innerHTML);
  };
  numNine.onclick = function(event) {
    handleNumberClick(numNine.innerHTML);
  };
  numZero.onclick = function(event) {
    handleNumberClick(numZero.innerHTML);
  };


  var operatorAction = function(operatorString, operatorDisplay) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = operatorString;
    result.innerHTML = operatorDisplay;
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
  };
};

