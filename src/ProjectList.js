class ProjectList{
   static list = []
   static addProject(project,id) {
        ProjectList.list.push({project: project,projectID: id});
    }
    static removeProject(projectID) {
        ProjectList.list.forEach((project) => {
            if (project.projectID == projectID) {
               ProjectList.list.splice(ProjectList.list.indexOf(project),1); 
            }
        })
    }
    static getProjects() {
        return ProjectList.list;
    }
}

export default ProjectList;