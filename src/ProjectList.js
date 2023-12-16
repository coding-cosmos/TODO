class ProjectList{
    constructor() {
        this.projectList = []
    }
    addProject(project) {
        this.projectList.push(project);
    }
    removeProject(index) {
        this.projectList.splice(index, 1);
    }
    getProjects() {
        return this.projectList;
    }
}