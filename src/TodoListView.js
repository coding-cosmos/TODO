import InputField from "./InputField";
import detailIcon from './icons/icons8-detail-24.png';
import editIcon from './icons/icons8-edit-24.png';
import delIcon from './icons/icons8-delete-black-24.png';
import calIcon from './icons/icons8-calender-24.png';


import './styles/todoview-styles.css';
import MainController from "./MainController";

function TodoListView(Title, DueDate, priority, status,id) {
    const todoListDiv = document.createElement('div');
    todoListDiv.className = 'todo';
    todoListDiv.setAttribute('data-todoID', `${id}`);

    const checkBox = InputField("", 'todo-status', 'checkbox');
    checkBox.className = 'status';  

    const title = document.createElement('div');
    title.className = "title";
    title.innerText = `${Title}`;

    const dueDateDiv = document.createElement('div');
    const dueDate = document.createElement('div');
    dueDateDiv.className = "duedate";
    dueDate.innerText = `${DueDate}`;
    const calDiv = document.createElement("div");
    calDiv.className = "calender";
    const cal = document.createElement("img");
    cal.src = calIcon;
    calDiv.appendChild(cal);

    dueDateDiv.appendChild(calDiv);
    dueDateDiv.appendChild(dueDate);


    const detailDiv = document.createElement('div');
    detailDiv.className = 'detail';
    const detail = document.createElement('img');
    detail.src = detailIcon;
    detailDiv.appendChild(detail);
    detailDiv.addEventListener('click', () => {
        MainController.showDetail(detailDiv.parentElement.parentElement);
    });

    const editDiv = document.createElement('div');
    editDiv.className = 'edit';
    const edit = document.createElement('img');
    edit.src = editIcon;
    editDiv.appendChild(edit);
    editDiv.addEventListener("click", () => {
        MainController.editTodo(editDiv.parentElement.parentElement);
    });

    const delDiv = document.createElement('div');
    delDiv.className = 'delete';
    const del = document.createElement('img');
    del.src = delIcon;
    delDiv.appendChild(del);
    delDiv.addEventListener("click", () => {
        MainController.removeTodo(delDiv.parentElement.parentElement);
    });

    const iconDiv = document.createElement('div');
    iconDiv.className = 'icons';
    iconDiv.appendChild(detailDiv);
    iconDiv.appendChild(editDiv);
    iconDiv.appendChild(delDiv);


    todoListDiv.appendChild(checkBox);
    todoListDiv.appendChild(title);
    todoListDiv.appendChild(dueDateDiv);
    todoListDiv.appendChild(iconDiv);
    
    return todoListDiv;
}

export default TodoListView;