let city = prompt ('Stolica Kyrgyzstana?', '');
if( city === 'Bishkek'){
    alert('Verno!')
}else{
    alert('Ne znaete?')
}

let vizit = prompt('Kto prishel?');
if (vizit === 'admin') {
    password1 = prompt('password');
    if(password1 === 'chernyi vlastelin'){
        alert ('welcome!');
    }else if(password1 == null){
        alert('vhod otmenen')
    }
    else {
        alert('parol ne veren')
    }

} else if  (vizit == null) {
        alert('Vhod otmenen')
} else {
  alert('Ya vas ne znayu')
}


