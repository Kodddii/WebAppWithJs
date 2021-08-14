const todoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){

    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    
    saveToDos(); 
}



function paintToDo(newTodo){
    const li = document.createElement("li");   
    li.id = newTodo.id
    const span = document.createElement("span");  
    span.innerText = newTodo.text; 
    const button = document.createElement("button");  
    button.innerText = "❌"; 
    button.addEventListener("click",deleteToDo); 

    li.appendChild(span); 
    li.appendChild(button); 
    todoList.appendChild(li);   
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    
    toDoInput.value=""
    const newTodoObj = {
        text:newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit",handleToDoSubmit);



const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedToDos = JSON.parse(savedTodos);
    
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    }


