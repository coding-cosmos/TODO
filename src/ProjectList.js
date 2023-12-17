class ProjectList{
   static list = []
   static addProject(project) {
        ProjectList.list.push(project);
    }
    static removeProject(index) {
        ProjectList.list.splice(index, 1);
    }
    static getProjects() {
        return ProjectList.list;
    }
}