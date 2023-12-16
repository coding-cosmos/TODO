class Project{
    constructor() {
        this.todoList = []
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    getProject() {
        return this.todoList;
    }
}