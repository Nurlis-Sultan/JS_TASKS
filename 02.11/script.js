
function numbers (a, b){
    if(a < b){
       return  a;
    }else {
        return b;
    }
}
let result = numbers(7.99999,8);
alert(result)

function fun (result) {
    alert(result)
}
fun(result);

function Hello () {
        return 'Hi, Javascript!';
}
alert(Hello());

let number1 = 5

function number (a) {
    return a*a*a;
}
let cub = 3
alert(number(number1));

// number1 = number(5);
// alert(number1)


function getName(qwerty = 'gost') {
    return 'Privet' + qwerty
}

let qwerty = 'Vasya';
alert(getName())




















