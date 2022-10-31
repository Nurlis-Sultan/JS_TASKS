// let city = prompt ('Stolica Kyrgyzstana?', '');
// if( city === 'Bishkek'){
//     alert('Verno!')
// }else if(city == null){
//     alert('vhod otmenen')
// }else{
//     alert('Ne znaete?')
// }
//
// let vizit = prompt('Kto prishel?');
// if (vizit === 'admin') {
//     password1 = prompt('vvedite parol');
//     if(password1 === 'chernyi vlastelin'){
//         alert ('Welcome');
//     }else if(password1 == null){
//         alert('vhod otmenen')
//     }
//     else {
//         alert('parol ne veren')
//     }
//
// } else if  (vizit == null) {
//         alert('Vhod otmenen')
// } else {
//   alert('Ya vas ne znayu')
// }

let age = prompt('vozrast?', 20);
let info = (age < 12) ? 'hi, teen!':
    (age < 20) ? 'Hello, hei!':
        (age < 100) ? 'Good evening!':
            'nu ty ppc!';
alert(info);



