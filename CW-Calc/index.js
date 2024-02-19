var ipt=document.getElementById('ipt');
function Prg(val) {
    if (val === 'C') {
        Clr();
    }
    else {
        ipt.value += val;
    }
}
function Ans(){
    ipt.value=eval(ipt.value);
    }
function Clr(){
    ipt.value=ipt.value.substr(0,ipt.value.length-1);
    }
function Clc(){
    ipt.value="";
    }
function Loop() {
    for (var i = 0; i < 5; i++) {
        ipt.value += i + ' ';
    }
}
