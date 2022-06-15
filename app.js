// Select DOM Elements
const todoInput = document.querySelector('#todoInput')
const todoList = document.querySelector('#todoList')
const addButton = document.querySelector('#addButton')

// Event Listener: Add Todo Button
addButton.addEventListener('click', addTodo)

// Feature: Add Todo
function addTodo(e) {
    e.preventDefault()

    //id
    const id = todoList.children.length + 1 //next id value by adding one to current id valueS

    //value
    const item = todoInput.value
    if (!item) return

    const newTodo = `
        <li id="${id}">
            <span>${item}</span>
            <button onclick="completeTodo(${id})">Complete</button>
            <button onclick="deleteTodo(${id})">Delete</button>
        </li>
    `

    //append the new todo into the last todo list
    todoList.innerHTML += newTodo

    //clear input
    todoInput.value = ''
}

// function findTodo(id){
//     console.log(todoList.children)

//     return todoList.children[id -1] //get current id value by minusing next id value by 1
// } //official

// Feature: Complete Todo
function completeTodo(id){
    // const todoItem = findTodo(id) //official

    // const itemSpan = todoItem.firstElementChild //official
    const itemSpan = todoList.children[id -1].firstElementChild
    itemSpan.toggleAttribute('done')

    const completeStatus = itemSpan.getAttribute('done') === null ? false : true
    // const completeButton = todoItem.children[1] //official
    const completeButton = todoList.children[id - 1].children[1] //sendiri add
    completeButton.innerText = completeStatus? 'Undo' : 'Complete'
    console.log('A')
}

// Feature: Delete Todo
function deleteTodo(id){
    // const todoItem = findTodo(id) //official

    todoList.children[id - 1].classList.add('deleted__todo') //sendiri add
    // todoItem.classList.add('deleted__todo') //official
}