/********** 1) **********/

let x = prompt('vvedite chislo','7');
if (x==='7'){
    alert('verno');
}else {
    alert('neverno');
}
/********** 2) **********/

let a = 0;
let b = 2;
if(a <= 1 || b >= 3){
    alert(a+b);
} else {
    alert(a-b);
}
/********** 3) **********/

let time = prompt('Vvedite chislo ot 0 - 59');
if(time >= 0 && time <=14){
    alert('First quarter');
}else if(time >=15 && time <=29){
    alert('Second quarter');
}else if(time >= 30 && time <= 44){
    alert('Third quarter');
}else if(time >= 45 && time <= 59){
    alert('Fourth quarter');
}
else {
    alert('znachenie ne popadaet v diapazon 0-59');
}


