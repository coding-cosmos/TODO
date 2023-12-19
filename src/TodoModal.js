import Select from "./Select";
import InputField from "./InputField";
import TextArea from "./TextArea";
import MainController from "./MainController";
class TodoModal {
    constructor() {
        this.dialog = document.createElement('dialog');
        this.form = document.createElement('form');

        const closeButton = document.createElement('button')
        closeButton.innerText = "Done";
        closeButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.fetchData();
            MainController.storeTodo(this.data);
            this.dialog.close();
        })

        this.titleInput = InputField('Title:', 'name', 'text');
        this.dueDateInput = InputField('Due Date:', 'dueDate', 'date');

        this.priority = Select('Priority', 'High', 'Medium', 'Low');
        this.status = Select('Status', 'Done', 'On Going', 'Not Started');
        this.description = TextArea('Description');


        this.form.appendChild(this.titleInput);
        this.form.appendChild(this.dueDateInput);
        this.form.appendChild(this.priority);
        this.form.appendChild(this.description);
        this.form.appendChild(this.status);
       this.form.appendChild(closeButton);
        this.dialog.appendChild(this.form);

        document.querySelector('.main').appendChild(this.dialog);
        this.dialog.showModal();
    }

    fetchData() {
       this.data = {
            title: this.titleInput.querySelector('input').value,
            dueDate: this.dueDateInput.querySelector('input').value,
            priority: this.priority.querySelector('select').value,
            description: this.description.querySelector('textarea').value,
            status: this.status.querySelector('select').value,

        };
    }


}

export default TodoModal;