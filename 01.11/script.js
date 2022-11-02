// const num = [1,2,5,6,88,5];
// let result = 0;
// for (let i = 0; i < num.length; i++){
//     result += num[i];
// }
// console.log(result)


// const square = [5,5,5,5,5,5,5,5,5,5];
// let sum = 0;
// for (let i = 0; i < square.length; i++){
//     sum += square[i] * square[i];
// }
// console.log(sum);


const massive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const result = [];
for (let i = 2; i <= massive.length; i++){
    if (i % 2 === 0){
        result.push(i);
    }
}
console.log(result);