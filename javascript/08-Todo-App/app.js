const todo = document.querySelector('#todo');
const ul = document.querySelector('#ul');


const arr = [];
function renderTodo() {
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `
        <li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`
    }
}
function addTodo() {
    ul.innerHTML = ''
    arr.push(todo.value);
    console.log(arr);
    renderTodo()
    todo.value = '';
}


function deleteTodo(i) {
    ul.innerHTML = ''
    console.log('todo deleted', arr[i]);
    arr.splice(i, 1);
    console.log(arr);
    renderTodo()

}
function editTodo(i) {
    ul.innerHTML = ''
    // console.log('todo edited' , arr[i]);
    const editedVal = prompt('enter value to update');
    arr.splice(i, 1, editedVal);
    renderTodo()
}


// const fruit = ['apple' , 'banana' , 'orange'];
// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// renderTodo()

