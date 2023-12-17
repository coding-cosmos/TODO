class Project{
    constructor(name) {
        this.todoList = [];
        this.name = name;
    }
    addTodo(todo,id) {
        this.todoList.push({todo,id});
    }
    removeTodo(index) {
        this.todoList.splice(index, 1);
    }
    getProject() {
        return ({
            todos: this.todoList,
            name: this.name
        });
    }
}

export default Project;