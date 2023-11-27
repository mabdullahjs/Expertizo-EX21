const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');


form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    // console.log(email.value);
    // console.log(password.value);
    const obj = {
        email:email.value,
        password:password.value
    }
    // console.log(obj);
    const strObj = JSON.stringify(obj);
    localStorage.setItem('userDetail' , strObj)
    email.value = ''
    password.value = ''
    window.location = 'home.html'
    // console.log(window.location);
})