import Project from "./Project";
import ProjectList from "./ProjectList";


if (localStorage.length == 0) {
  // Add default project if localStorage is empty
  ProjectList.addProject("My Project",0);
  localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
} else {
  // copy the projects from localStorage
  JSON.
    parse(localStorage.getItem("projects"))
    .forEach((project) => {
    ProjectList.addProject(project.name,project.id);
  });
}

class Data {
  static getProjectList() {
    return JSON.parse(localStorage.getItem("projects"));
  }

  static addProject(name, id) {
    // Add in ProjectList
    ProjectList.addProject(name,id);
    console.log(ProjectList.getProjects());

    //Add in localStorage
    localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
  }

  static removeProject(id) {
    // Remove from ProjectList
    ProjectList.removeProject(id);
    console.log(ProjectList.getProjects());

    // Update localStorage 
    localStorage.setItem("projects", JSON.stringify(ProjectList.getProjects()));
  }
}

export default Data;
