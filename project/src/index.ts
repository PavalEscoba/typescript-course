const btn = document.getElementById('btn') as HTMLButtonElement;
const toDoInputElement = document.getElementById(
    'todoinput'
) as HTMLInputElement;
const formElement = document.querySelector('form')!;
const toDoList = document.getElementById('todolist');

interface Todo {
    text: string;
    isDone: boolean;
}

const toDoArray: Todo[] = readToDos();
toDoArray.forEach((item) => createToDoItem(item));

function readToDos(): Todo[] {
    const todoes = localStorage.getItem('todos');
    if (todoes == null) return [];
    return JSON.parse(todoes);
}

function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(toDoArray));
}

function createToDoItem(todo: Todo) {
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
    toDoList?.append(newToDoItem);
}

const onSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    const toDoItem: Todo = {
        text: toDoInputElement.value,
        isDone: false,
    };

    toDoArray.push(toDoItem);
    createToDoItem(toDoItem);

    saveToDos();

    toDoInputElement.value = '';
};

formElement.addEventListener('submit', onSubmitHandler);
