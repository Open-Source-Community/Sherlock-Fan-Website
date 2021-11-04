var val1;
var val2;
var val3;
var val4;
function getVal1(){val1 = document.getElementById('square-1').value;}

function getVal2(){val2 = document.getElementById('square-2').value;}

function getVal3(){val3 = document.getElementById('square-3').value;}

function getVal4(){val4 = document.getElementById('square-4').value;}

function validate(){
    var res = val1+val2+val3+val4; 
    if(res == "SHER" || res=="sher")
        location.href = "/home";
    else return false;
}

var fcs1 = document.getElementById('square-1');
var fcs2 = document.getElementById('square-2');
var fcs3 = document.getElementById('square-3');
var fcs4 = document.getElementById('square-4');

fcs1.onkeyup = function(){
    if(this.value.length === parseInt(this.attributes["maxlength"].value))
        fcs2.focus();
};
fcs2.onkeyup = function(){
    if(this.value.length === parseInt(this.attributes["maxlength"].value))
        fcs3.focus();
};
fcs3.onkeyup = function(){
    if(this.value.length === parseInt(this.attributes["maxlength"].value))
        fcs4.focus();
};