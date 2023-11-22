// // console.log('hello world');

// function greetUser(){
//     console.log('clicked function');
// }

// const h1 = document.querySelector('#head');

// // h1.addEventListener('click' , function (){
// //     console.log('clicked through add event listner');
// // })

// h1.addEventListener('click' , greetUser);

















// const btn = document.querySelector('#head');
// btn.addEventListener('click' , function(event){
//     // event.preventDefault()
//     // event.stopPropagation()
//     // console.log(event);

// } , false)










































// const ul = document.querySelector('#ul');
// const img2 = document.querySelector('#img2');
// const img6 = document.querySelector('#img6');


// //false ===> event bubbling
// //true ==> event capturing

// ul.addEventListener('click' , function (){
//     // event.stopPropagation()
//     console.log('ul clicked');
// } , false)


// img2.addEventListener('click' , function (event){
//     // event.stopPropagation(); // parent wala function nahi chalai ga.
// } , false)

// ul.addEventListener('click', function (event) {
//     console.log(event.target);
//     if (event.target.tagName === 'IMG') {
//         const removeItem = event.target;
//         removeItem.parentNode.remove()
//     }
// })


// img6.addEventListener('click' , function(event){
//     event.preventDefault(); // kisi bhi element ka default behaviour khtm krdeta ha.
// })





























// const form = document.querySelector('#form');
// const input = document.querySelector('#input');


// form.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(input.value);
//     input.value = ''
// })








// const ul = document.querySelector('#ul');
// ul.addEventListener('mouseout' , function(){
//     console.log('mouse over pa function call horha');
// })















































// const img = document.querySelector('img');

// img.addEventListener('mouseover', function () {
//     img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9MQVrzjU2LMk4il7DAarBNLlhIsaT8L1pA&usqp=CAU'
// })

// img.addEventListener('mouseout', function () {
//     img.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'
// })


// [
//     {
//         name:'abdullah',
//         email:'abc@gmail.com'
//     },
//     {
//         name:'abdullah2',
//         email:'abc@gmail.com'
//     },
//     {
//         name:'abdullah3',
//         email:'abc@gmail.com'
//     }
// ] 














































































//hoisting
// console.log(names);
// let names = 'abdullah';

// abc()
// function abc(){
//     console.log('hello world');
// }



//arrow function


// const greetUser = function(){
//     console.log('hello abd');
// }














// const greetUser = (names , lastName) =>  {
//     `hello ${names}`    
// };
// console.log(greetUser('abdullah'));


// const greetUser = names => `hello ${names}`;










// const img = document.querySelector('img');

// img.addEventListener('click', () => {
//     console.log('hello world');
// })




























// const str = 'the Second World the War the'
// console.log(str.replace('the' , 'a'));
// console.log(str.replaceAll('the' , 'a'));












//regex
//window object
//asynchoronous
//fetch api
