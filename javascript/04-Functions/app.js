


// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');
// // console.log('hello world');




// // function greetUser(names, age, salery) {
// //     console.log('my name is ' + names + ' and my age is ' + age + ' and my salery is ' + salery);
// // }


// // greetUser('abdullah', 60 , 80);



















// // function greetUser (){
// //     let names =  'hello user'
// //     return names
// // }
// // console.log(greetUser());
// // greetUser()




















// // function sumOfTwoNum(num1, num2) {
// //     // console.log(num1 + num2);
// //     const sum = num1 + num2
// //     return sum
// // }
// num1

// // console.log(sumOfTwoNum(5, 7));














// // prompt ma 5 values loga name , p1 , p2 , price1 , price2
// //log your name is this and product 1 name is this and its price is this and product 2 name is this and total amount is this




























// let calculation = 29; // global variables
// function greetUser(userName){
//     // console.log('hello world ' + userName);
//     let age = 10; // local variables
//     return 'hello world' + userName + ' and his age is '+ age 
// }

// console.log(greetUser('abdullah'));

// console.log(age);




// let str = prompt('enter any string');

// function palindrome (str){
//     console.log(str.split('').reverse().join(''));
//     if(str.split('').reverse().join('') === str){
//         console.log('this is palindrome');
//     }else{
//         console.log('chalo shaba katto');
//     }

// }


// palindrome(str)




// let str = 'the quick brown fox';

// function abc(str) {
//     let convertArr = str.split(' ');
//     const arr = []
//     for (let i = 0; i < convertArr.length; i++) {
//         // console.log(convertArr[i]);
//         let converted = convertArr[i].charAt(0).toUpperCase() + convertArr[i].slice(1);
//         arr.push(converted)

//     }
//     return arr.join(' ');
// }
// console.log(abc(str));







function celsiusToFahrenheit() {
    let c = -40
    let f = (c * 9 / 5) + 32
    console.log(`${c}°C is ${f}°F`);
}

celsiusToFahrenheit()