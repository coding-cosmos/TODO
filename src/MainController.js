import Data from "./data";
import TodoListView from "./TodoListView";
import TodoModal from "./TodoModal";

class MainController {
  static activeProject() {
    const id = Data.getSelctedProjectId();
    const project = Data.getProjectList().find((project) => project.id == id);

    if (project) {
      return project;
    } else {
      return {
        name: "",
      };
    }
  }

  static setHeading() {
    const heading = document.querySelector(".heading>h1");
    heading.innerText = MainController.activeProject().name;
  }

  static getTodos() {
    return MainController.activeProject().todoList;
    // return [];
  }

  static storeTodo(todo) {
    Data.addTodo(MainController.activeProject().id, todo);
    MainController.renderTodos();
  }

  static removeTodo(element) {
    const index = element.getAttribute("data-todoID");
    const id = MainController.activeProject().id;
    Data.removeTodo(id, index);
    MainController.renderTodos();
  }

  static editTodo(element) {
    const index = element.getAttribute('data-todoID');
    const todo = MainController.getTodos().at(index);
    console.log(todo);
    TodoModal.showTodo(todo,index);
  }

  static saveEditTodo(todo, index) {
    const id = MainController.activeProject().id;
    Data.editTodo(id,todo, index);
    console.log('edited');
    MainController.renderTodos();
  }

  static showDetail(element) {
    console.log('show detail');
     const index = element.getAttribute("data-todoID");
    const todo = MainController.getTodos().at(index);
    console.log(todo);
    TodoModal.showTodoDetail(todo);
  }

  static renderTodos() {
    const todos = MainController.getTodos();
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";
    todos.forEach((todo, index) => {
      todoList.appendChild(
        TodoListView(
          todo.title,
          todo.dueDate,
          todo.priority,
          todo.status,
          index
        )
      );
    });
  }

  static showTodoModal() {
    const todoModal = new TodoModal();
    // todoModal.showModal();
  }

  static renderMain() {
    MainController.setHeading();
    MainController.renderTodos();
  }
}

export default MainController;
