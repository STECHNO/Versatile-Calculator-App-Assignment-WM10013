function getNum(calnum){
    var calculation = document.getElementById("calculation");
    calculation.value += calnum;
}

function clearCal(){
    var calculation = document.getElementById("calculation");
    calculation.value = " ";
}

function getAns(){
    var calculation = document.getElementById("calculation");
    calculation.value = eval(calculation.value);

}

function clearOnly(){
    var calculation = document.getElementById("calculation");
    calculation.value = calculation.value.slice(0, -1);
}

function squareRoot(){
    var calculation = document.getElementById("calculation");
    calculation.value = Math.sqrt(calculation.value);
}