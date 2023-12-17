import Sidebar from "./Sidebar";
import './styles/styles.css';
import ProjectViewListController from "./ProjectViewListController.js";
import Main from "./main.js";   


function render() {
    const container = document.querySelector('#container');
    container.appendChild(Sidebar());
     container.appendChild(Main());
    ProjectViewListController.renderData();
   
}
render();