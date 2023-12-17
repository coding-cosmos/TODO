import Project from "./Project";
import ProjectList from "./ProjectList";


if (localStorage.length == 0) {
  // Add default project if localStorage is empty
  ProjectList.addProject(new Project("My Project"), 0);
  localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
} else {
  // copy the projects from localStorage
  JSON.
    parse(localStorage.getItem("projects"))
    .forEach((project) => {
    ProjectList.addProject(project.project, project.projectID);
  });
}

class Data {
  static getProjectList() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  static addProject(name, id) {
    ProjectList.addProject(new Project(name), id);
    console.log(ProjectList.getProjects());
    localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
  }

  static removeProject(id) {
    ProjectList.removeProject(id);
    console.log(ProjectList.getProjects());
    localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
  }
}

export default Data;
