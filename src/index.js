import Sidebar from "./Sidebar";
import './styles/styles.css';
import ProjectViewListController from "./ProjectViewListController.js";


function render() {
    const container = document.querySelector('#container');
    container.appendChild(Sidebar());
    ProjectViewListController.renderData();
}
render();