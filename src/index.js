import Sidebar from "./Sidebar";
import './styles/styles.css';
import ProjectViewListController from "./ProjectViewListController.js";
import Main from "./main.js";   
import MainController from "./MainController.js";


function render() {
    const container = document.querySelector('#container');
    container.appendChild(Sidebar());
    ProjectViewListController.renderProjectList();
    container.appendChild(Main());
    MainController.renderMain();
}
render();