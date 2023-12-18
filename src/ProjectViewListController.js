import MainController from "./MainController";
import ProjectView from "./ProjectView";
import Data from "./data";

class ProjectViewListController {
  // stores the id of previous project
  static prvID = 0;

  // add editable view to projectList
  static addProjectView() {
    const projectList = document.querySelector(".project-list");
    const newProjectView = new ProjectView(
      true,
      "",
      ++ProjectViewListController.prvID
    );
    projectList.appendChild(newProjectView);
  }

  static removeProject(project) {
    // get id of project to remove
    const id = project.querySelector("input").getAttribute("data-projectID");

    // remove project from localStorage
    Data.removeProject(id);

    // update UI
    ProjectViewListController.renderProjectList();
    MainController.renderMain();
  }

  static addProject(nameInput) {
    // Add project to localStorage
    Data.addProject(nameInput.value, nameInput.getAttribute("data-projectID"));

    // Updates UI
    // Data.storeSelctedProjectId();
    ProjectViewListController.renderProjectList();
    MainController.renderMain();
  }

  // Updates UI
  static renderProjectList() {
    const projectViewList = document.querySelector(".project-list");

    // Clears the list
    projectViewList.innerHTML = "";

    // Get list from localStorage
    const projectList = Data.getProjectList();

    // Update UI
    projectList.forEach((project, index) => {
      ProjectViewListController.prvID = project.id;
      const projectView = new ProjectView(
        false,
        project.name,
        project.id
      );

      projectView.addEventListener("click", (event) => {
        ProjectViewListController.select(event.target);
      });

      if (Data.getSelctedProjectId()==project.id) {
        projectView.classList = "item selected";
      }
      projectViewList.append(projectView);
    });
  }

  static select(element) {
    const selectedView = document.querySelector(".selected");
    (selectedView)? selectedView.classList = "item":"";
    element.classList = "item selected";
    MainController.renderMain();
    Data.storeSelctedProjectId();
  }
}

export default ProjectViewListController;
