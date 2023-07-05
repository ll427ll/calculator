var num =0 ;
var symbol ;

function btn_click (a) {
    resultFld.value += a;
}

function cal(b) {
    var firstNum = (document.getElementById("resultFld").value);
    num = firstNum;
    symbol = b ;
    return document.getElementById("resultFld").value = "";
}

function compute () {
    var secNum = parseFloat(document.getElementById("resultFld").value);
    var result ;
    switch (symbol) {
        case '+' : result = Number(num) + Number(secNum) ; 
        document.getElementById("resultFld").value = result; 
        break;
        case '-' : result = Number(num) - Number(secNum) ; 
        document.getElementById("resultFld").value = result;
        break;
        case '*' : result = Number(num) * Number(secNum) ; 
        document.getElementById("resultFld").value = result;
        break;
        case '/' : result = Number(num) / Number(secNum) ; 
        document.getElementById("resultFld").value = result;
        break;
    }        
}

function clear_del() {
    document.getElementById("resultFld").value = "";
    num = 0;
}
