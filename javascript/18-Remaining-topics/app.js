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

const div = document.querySelector('.container');
const checkoutBtn = document.querySelector('#checkout-btn');

for (let i = 0; i < phones.length; i++) {
    // console.log(phones[i]);
    div.innerHTML += `
    <div class="p-5 border border-secondary-subtle m-5">
    brand:${phones[i].brand}<br/>
    Model:${phones[i].model}<br/>
    price:${phones[i].price}<br/>
    <button class="btn btn-primary my-2" onclick="addToCart(${i})">Add to Cart</button>
    </div> 
    `
    
}

const data = JSON.parse(localStorage.getItem('cartItems'));
let arr;
if(Array.isArray(data)){
    arr = [...data];
}else{
    arr = []
}
function addToCart(index){
    console.log('add to cart called' , index);
    arr.push(phones[index]);
    console.log(arr);
}


function checkout (){
    window.location = 'checkout.html'
    localStorage.setItem('cartItems',JSON.stringify(arr))
}

checkoutBtn.addEventListener('click' , checkout)