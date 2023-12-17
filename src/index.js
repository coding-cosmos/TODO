import Sidebar from "./Sidebar";
import './styles/styles.css';

function render() {
    const container = document.querySelector('#container');
    container.appendChild(Sidebar());

}
render();