// console.log('Hello DOM');
// const h3 = document.querySelectorAll('.head');
// const h1 = document.getElementById('head');
// const h1 = document.getElementsByClassName('head');
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// h1.innerHTML = 'changed through js'

































// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes);











// const textNode = document.childNodes[1].childNodes[2].childNodes[1].childNodes;
// const h1 = document.querySelectorAll('.head')[0];
// console.log(h1.childNodes);






















// const textNode = document.childNodes[1];

// console.log(textNode.firstChild);
// console.log(textNode.lastChild);
// console.log(textNode.firstChild);



























// const h1 = document.querySelector('.head');
// console.log(h1.nodeName);



// const a = document.querySelector('a');
// console.log(a.className);





































// let nodeToAdd = document.createElement("DIV");
// let para = document.createElement("P");
// let textNode = document.createTextNode("hello world");
// nodeToAdd.appendChild(textNode)
// console.log(nodeToAdd);

































// let div = document.createElement('DIV');
// {/* <div></div> */}
// let para = document.createElement('P');
// {/* <p></p> */}
// let paraText = document.createTextNode('hello world');
// // 'hello world'


// para.appendChild(paraText);
// <p>hello world</p>
// div.appendChild(para)
// {/* <div>
//     <p>hello world</p>
// </div> */}


// console.log(div);











// const ul = document.createElement('UL');
// const li1 = document.createElement('LI');
// const li2 = document.createElement('LI');
// const li3 = document.createElement('LI');


// li1.setAttribute('class' , 'li-one');
// li1.setAttribute('onclick' , 'deleteTodo()');

// const textNode1 = document.createTextNode('Home');
// const textNode2 = document.createTextNode('About');
// const textNode3 = document.createTextNode('Contact');

// li1.appendChild(textNode1);
// li2.appendChild(textNode2);
// li3.appendChild(textNode3);


// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// console.log(ul);






const input = document.querySelector('#todo');
const ul = document.querySelector('ul');

function addTodo(){
    if(input.value.trim() === ''){
        console.log('enter value');
    }else{
        const li = document.createElement('LI');
        const text = document.createTextNode(input.value);

        const deleteBtn = document.createElement('BUTTON');
        const editBtn = document.createElement('BUTTON');
        const delText = document.createTextNode('Delete');
        const editText = document.createTextNode('Edit');

        deleteBtn.setAttribute('onclick' , 'deleteTodo(this)');
        editBtn.setAttribute('onclick' , 'editTodo(this)');

        deleteBtn.appendChild(delText);
        editBtn.appendChild(editText);
        li.appendChild(text);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        ul.appendChild(li);
    }
   
    input.value = ''
}





function deleteTodo(element){
    console.log('todo deleted');
    console.log(element.parentNode);
    ul.removeChild(element.parentNode);
}
function editTodo(element){
    console.log('todo edited');
    console.log(element);
}


















