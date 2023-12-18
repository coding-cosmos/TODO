class Todo {
  constructor(title, dueDate, description, priority, status) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.status = status;
  }
  setDescription(description) {
    this.description = description;
  }
  setPriority(priority) {
    this.priority = priority;
  }
  setStatus(status) {
    this.status = status;
  }
  setDueDate(newDate) {
    this.dueDate = newDate;
  }
  setTitle(title) {
    this.title = title;
  }
  getTodo() {
    return {
      title: this.title,
      dueDate: this.dueDate,
      description: this.description,
      priority: this.priority,
      status: this.status,
    };
  }
}

export default Todo;