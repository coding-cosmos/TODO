class Project{
    constructor(name) {
        this.todoList = [];
        this.name = name;
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    getProject() {
        return ({
            todos: this.todoList,
            name: this.name
        });
    }
}