import './styles/main-styles.css';
import AddButton from './AddButton';
import MainController from './MainController';

function Main() {
    const main = document.createElement('div');
    main.className = 'main';

    const headingDiv = document.createElement('div');
    headingDiv.className = "heading";
    const heading = document.createElement('h1');
    headingDiv.appendChild(heading);

    const todoListDiv = document.createElement('div');
    todoListDiv.className = "todo-list";

    const addBtnDiv = document.createElement('div');
    addBtnDiv.className = "add-btn";
    addBtnDiv.appendChild(AddButton(MainController.showTodoModal));

    main.appendChild(headingDiv);
    main.appendChild(todoListDiv);
    main.appendChild(addBtnDiv);
  
    return main;
}

export default Main;