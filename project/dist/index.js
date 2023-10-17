"use strict";
const btn = document.getElementById('btn');
const toDoInputElement = document.getElementById('todoinput');
const formElement = document.querySelector('form');
const toDoList = document.getElementById('todolist');
const toDoArray = readToDos();
toDoArray.forEach((item) => createToDoItem(item));
function readToDos() {
    const todoes = localStorage.getItem('todos');
    if (todoes == null)
        return [];
    return JSON.parse(todoes);
}
function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(toDoArray));
}
function createToDoItem(todo) {
    const newToDoItem = document.createElement('li');
    const newToDoCheckbox = document.createElement('input');
    newToDoCheckbox.type = 'checkbox';
    newToDoCheckbox.checked = todo.isDone;
    newToDoItem.innerText = todo.text;
    newToDoCheckbox.addEventListener('change', function () {
        todo.isDone = newToDoCheckbox.checked;
        saveToDos();
    });
    newToDoItem.append(newToDoCheckbox);
    toDoList === null || toDoList === void 0 ? void 0 : toDoList.append(newToDoItem);
}
const onSubmitHandler = (e) => {
    e.preventDefault();
    const toDoItem = {
        text: toDoInputElement.value,
        isDone: false,
    };
    toDoArray.push(toDoItem);
    createToDoItem(toDoItem);
    saveToDos();
    toDoInputElement.value = '';
};
formElement.addEventListener('submit', onSubmitHandler);
