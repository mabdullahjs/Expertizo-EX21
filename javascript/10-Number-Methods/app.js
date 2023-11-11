// console.log('hello world');

// let str = ['mango' , 'orange']
// console.log();
// console.log(typeof(str));



// function greetUser(){
//     let names = 'abdullah';
//     return names
// }

// console.log(greetUser());


// const arr = ['mango' , function(){
//     return('called function in array');
// }]

// console.log(arr[1]());





// for(let i = 0; i < 10; i++){
//     console.log(i);
//     // for(let j = 0 ; j < 10; j++){
//     //     console.log('innerloop ===> ' , j);
//     // }

// }































// const colour = ['red' , 'orange' , 'green' , 'blue' , 'purple' , 'aqua' , 'yellow' , 'peach' , 'gray' , 'pink' , 'bisque'];
// const div = document.querySelector('.container');
// const body = document.querySelector('body');

// for (let i = 0; i < colour.length; i++) {
//     div.innerHTML += `<button onclick="changeColor(${i})">${colour[i]}</button>`

// }

// const changeColor = function(i , a){
//     console.log('colour changed' , colour[i]);
//     body.style.backgroundColor = colour[i]
// }


































// let num = 23
// console.log(Number(num));
// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(num.toFixed(3));



// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// console.log(Math.floor(Math.random()*10));

const img = document.querySelector('img')
const para = document.querySelector('p')
function toss(clicked) {
    let roundNumber = Math.floor(Math.random() * 2);
    console.log(roundNumber);
    if (clicked === 'masjid' && roundNumber === 0 || clicked === 'chand' && roundNumber === 1) {
        console.log(clicked, 'toss jeet gaye');
        para.innerHTML = 'toss jeet gaye'
    } else {
        console.log('toss haar gaye');
        para.innerHTML = 'Program warr gaya'
    }
    if (roundNumber === 1){
        img.src = './assets/chand.jpg'
    }else{
        img.src = './assets/masjid.jpg'
    }
}




















































