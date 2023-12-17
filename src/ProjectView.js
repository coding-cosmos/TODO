import "./styles/projectview-styles.css";
import del from "./icons/icons8-delete-24.png";
import ProjectViewListController from "./ProjectViewListController";

class ProjectView {
  constructor(editable, name,id) {
    this.projectDiv = document.createElement("div");
    this.projectDiv.className = "item";

    // delete icon
    this.delIcon = document.createElement("img");
    this.delIcon.src = del;
    this.delIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      ProjectViewListController.removeProject(e.target.parentElement);
    });

    // project name input
    this.nameInput = document.createElement("input");
    this.nameInput.setAttribute("data-projectID", `${id}`);
    this.nameInput.classList = "name";

    if (!editable) {
      this.nameInput.disabled = true;
      this.nameInput.value = name;
      this.nameInput.style = "pointer-events:none";
      this.projectDiv.appendChild(this.nameInput);
      this.projectDiv.appendChild(this.delIcon);
    } else {
      this.nameInput.placeholder = "enter project name";
      this.projectDiv.appendChild(this.nameInput);
      this.nameInput.addEventListener("change", () => {
        this.nameInput.disabled = true;
        this.projectDiv.appendChild(this.delIcon);
        ProjectViewListController.addProject(this.nameInput);
      });
    }

    return this.projectDiv;
  }
}

export default ProjectView;
