// console.log("hello world1");
// console.log("hello world2");
// console.log("hello world3");
// console.log("hello world4");
// console.log("hello world5");

// setTimeout(()=>{
// alert('hello world')
// }, 2000);

// setInterval(()=>{
//     console.log('hello world from interval');
// } , 1000)

//var
//console
//var data = undefined
//log data

// set timeout
// set interval
//promises
//async await









// console.log("hello world1");
// console.log("hello world2");
// console.log("hello world3");
// setTimeout(() => {
// console.log("hello world4");
// }, 0);
// console.log("hello world5");












// app start


const arr = [];
let data;
const div = document.querySelector('.render-phones');
const checkout = document.querySelector('#checkout');

axios.get('https://fakestoreapi.com/products')
.then((res)=>{
    // console.log(res.data);
    data = res.data
    for (let i = 0; i < res.data.length; i++) {
        // console.log(res.data[i]);  
        div.innerHTML += `
        <div style="border: 1px solid black;" class="m-5 p-5 rounded">
        <h1>title: ${res.data[i].title}</h1> <br/>
        <img width="200px" src="${res.data[i].image}" alt="product-image">
        <h3>price: ${res.data[i].price}</h3>
        <button onclick="addToCart(${i})" class="btn btn-primary m-2 btn-lg">Add to cart</button>
        </div>
        `
    }
}).catch((err)=>{
    console.log(err);
})

function addToCart (index){
    // console.log(data[index]);
    arr.push(data[index]);
    console.log(arr);
}



checkout.addEventListener('click' , ()=>{
    localStorage.setItem('items' , JSON.stringify(arr));
    window.location = 'checkout.html';
    // localStorage.removeItem('items')
})







































































// const bankBalance = 100000;
// const rishta = new Promise((resolve, reject) => {
//     if(bankBalance > 500000){
//         // console.log('shaadi mubarak');
//         resolve('shaadi mubarak')
//     }else{
//         // console.log('bhat dukh hua');
//         reject('bhat dukh hua');
//     }
// })
// rishta
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
















































































// function rishta(bankBalance){
//     return new Promise((resolve, reject) => {
//         if(bankBalance > 100000){
//             resolve('shaadi mubarak')
//         }else{
//             reject('ammi na zehr kahlia')
//         }
//     })
// }
// rishta(20000)
// .then(function (res){
//     console.log(res);
// })
// .catch(function (err){
//     console.log(err);
// })












