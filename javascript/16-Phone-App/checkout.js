const data = localStorage.getItem('items')
const items = JSON.parse(data);

console.log(items);


const div = document.querySelector('.render-phones');
for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);  
    div.innerHTML += `
    <div style="border: 1px solid black;" class="m-5 p-5 rounded">
    <h1>title: ${items[i].title}</h1> <br/>
    <img width="200px" src="${items[i].image}" alt="product-image">
    <h3>price: ${items[i].price}</h3>
    <button onclick="addToCart(${i})" class="btn btn-primary m-2 btn-lg">Add to cart</button>
    </div>
    `
}