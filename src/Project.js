class Project{
    constructor(name,id,todoList) {
        this.todoList = todoList;
        this.name = name;
        this.id = id;
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
            name: this.name,
            id: this.id
        });
    }
}

export default Project;