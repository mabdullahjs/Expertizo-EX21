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

const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Abdullah',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000
    },

]

// console.log(phones);
const div = document.querySelector('.render-phones');
for (let i = 0; i < phones.length; i++) {
    div.innerHTML += `
    <div class="p-5 border border-1  rounded-1 shadow-lg m-2">
            <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="btn btn-primary m-2">Add to Cart</button>
    </div>
    `
    
}

function addToCart (index){
    console.log(phones[index]);
}