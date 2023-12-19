import Project from './Project';

class ProjectList{
    static list = []
    
    static addProject(name,id,todoList) {
        ProjectList.list.push(new Project(name,id,todoList));
    }
 
    static removeProject(id) {
        ProjectList.list.forEach((project, index) => {
            if (project.id == id) {
                ProjectList.list.splice(index, 1);
            }
        });
    }

    static getProjects() {
        return ProjectList.list;
    }
}

export default ProjectList;