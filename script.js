btns = document.querySelectorAll('.btnCalc');
exp = document.querySelector('.expression');
calculator = document.querySelector('.calculator');
result = document.querySelector('.result');
back = document.querySelector('.back');

let expression = 0;

let clickBtn = function(e) {
    e.preventDefault();
    if(expression === 0) {
        expression = e.target.value;
    }else {
        expression = expression + e.target.value;
    }

    exp.value = expression;
}

const getResult = function(e) {
    e.preventDefault();
    console.log(expression);
    let expResult = Function('return '+ expression)(); 
    result.textContent = expResult;
}

const allClear = function(e) {
    expression = 0;
    result.textContent = 0;
}

const lessOne = function(e) {
    if(expression.length < 0){
        return;
    }
    e.preventDefault();
    expression = String(expression).slice(0,-1);
    exp.value = expression;
}

calculator.addEventListener('submit', getResult);
calculator.addEventListener('reset', allClear)
back.addEventListener('click', lessOne)
btns.forEach(btn => btn.addEventListener('click',clickBtn));

