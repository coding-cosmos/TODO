import Data from "./data";
import Todo from "./Todo";
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
  }

  static storeTodo(todo) {
    Data.addTodo(MainController.activeProject().id, todo);
    MainController.renderTodos();
  }
  static renderTodos() {
    const todos = MainController.getTodos();
      const todoList = document.querySelector(".todo-list");
      todoList.innerHTML = "";
    todos.forEach((todo) => {
      todoList.appendChild(
        TodoListView(todo.title, todo.dueDate, todo.priority, todo.status)
      );
    });
  }

  static showTodoModal() {
    const todoModal = new TodoModal();
  }

  static renderMain() {
    MainController.setHeading();
    MainController.renderTodos();
    // MainController.addTodos();
  }
}

export default MainController;
