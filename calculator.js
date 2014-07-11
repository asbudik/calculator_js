
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


  numOne.onclick = function(event) {
    storeNum += numOne.innerHTML;
    result.innerHTML = storeNum;

  };
  numTwo.onclick = function(event) {
    storeNum += numTwo.innerHTML;
    result.innerHTML = storeNum;
  };
  numThree.onclick = function(event) {
    storeNum += numThree.innerHTML;
    result.innerHTML = storeNum;
  };
  numFour.onclick = function(event) {
    storeNum += numFour.innerHTML;
    result.innerHTML = storeNum;
  };
  numFive.onclick = function(event) {
    storeNum += numFive.innerHTML;
    result.innerHTML = storeNum;
  };
  numSix.onclick = function(event) {
    storeNum += numSix.innerHTML;
    result.innerHTML = storeNum;
  };
  numSeven.onclick = function(event) {
    storeNum += numSeven.innerHTML;
    result.innerHTML = storeNum;
  };
  numEight.onclick = function(event) {
    storeNum += numEight.innerHTML;
    result.innerHTML = storeNum;
  };
  numNine.onclick = function(event) {
    storeNum += numNine.innerHTML;
    result.innerHTML = storeNum;
  };
  numZero.onclick = function(event) {
    storeNum += numZero.innerHTML;
    result.innerHTML = storeNum;
  };

  add.onclick = function(event) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = "addition";
    result.innerHTML = add.innerHTML;
  };


  subtract.onclick = function(event) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = "subtraction";
    result.innerHTML = subtract.innerHTML;
  };

  multiply.onclick = function(event) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = "multiplication";
    result.innerHTML = multiply.innerHTML;

  };

  divide.onclick = function(event) {
    firstNum = parseInt(storeNum);
    storeNum = "";
    operator = "division";
    result.innerHTML = divide.innerHTML;
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

