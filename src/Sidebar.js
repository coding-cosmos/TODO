import './styles/sidebar-styles.css';
import AddButton from './AddButton.js';
import ProjectViewListController from './ProjectViewListController.js';

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


    // Add new project
    const addBtnDiv = new AddButton(ProjectViewListController.addProjectView);


    sideBar.appendChild(headingDiv);
    sideBar.appendChild(projectListDiv);
    sideBar.appendChild(addBtnDiv);


    return sideBar;
}

export default Sidebar;