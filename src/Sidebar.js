import './styles/sidebar-styles.css';
import ProjectView from './ProjectView.js';
import ProjectViewListController from './ProjectViewListController.js';
import AddButton from './AddButton.js';


function Sidebar() {
    const sideBar = document.createElement('div');
    sideBar.className = "sidebar";

    // heading
    const headingDiv = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = "Projects";
    headingDiv.appendChild(heading);


    // ProjectList
    const projectListDiv = document.createElement('div');
    projectListDiv.className = "project-list";

    const defaultProject = new ProjectView(false,"MY PROJECT");
    projectListDiv.appendChild(defaultProject);
   
    
    // Add new project
    const addBtnDiv = new AddButton(ProjectViewListController.addProject);


    sideBar.appendChild(headingDiv);
    sideBar.appendChild(projectListDiv);
    sideBar.appendChild(addBtnDiv);


    return sideBar;
}

export default Sidebar;