let isNewCalculation

function calculate(){
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
    historial(expression,result);
   isNewCalculation=true;
}

function clearDisplay(){
    document.getElementById('display').value = '';
    isNewCalculation=true;
}

function appendToDisplay(value){
    if(isNewCalculation){
        clearDisplay();
        isNewCalculation=false;
    }
    document.getElementById('display').value += value;
}

function historial (expression, result){
let historiElement = document.createElement("div");
historiElement.textContent = expression + " = " + result;
document.getElementById ("Historial").appendChild(historiElement);
}