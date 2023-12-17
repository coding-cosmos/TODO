import ProjectView from "./ProjectView";
import Data from "./data";

class ProjectViewListController {
  static prvID;
  static addProjectView() {
    const projectList = document.querySelector(".project-list");
    const newProjectView = new ProjectView(true,"",++ProjectViewListController.prvID);
    projectList.appendChild(newProjectView);
  }

  static removeProject(project) {
    project.remove();
    const id = project.querySelector('input').getAttribute('data-projectID');
  
    Data.removeProject(id);
    ProjectViewListController.renderData();
  }

  static addProject(nameInput) {
    Data.addProject(nameInput.value, nameInput.getAttribute('data-projectID'));
    

  }

  static renderData() {
    const projectViewList = document.querySelector(".project-list");
    projectViewList.innerHTML = "";
    const projectList = Data.getProjectList();  
    console.log(projectList);

    projectList.forEach((project) => {
      ProjectViewListController.prvID = project.projectID;
      const projectView = new ProjectView(
        false,
        project.project.name,
        project.projectID
      );

      projectViewList.append(projectView);
    });
  }
}

export default ProjectViewListController;
