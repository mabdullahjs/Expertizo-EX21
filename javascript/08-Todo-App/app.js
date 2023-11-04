const todoForm = document.querySelector('#todo');
const ul = document.querySelector('#ul');


function addTodo(){
    console.log(todoForm.value);
    ul.innerHTML += `<li>abcd </li>`;
}

