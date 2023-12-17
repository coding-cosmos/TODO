import './styles/addbtn-styles.css';

function AddButton(fun) {
    const addBtnDiv = document.createElement("div");
    const addBtn = document.createElement("button");
    addBtnDiv.appendChild(addBtn);
    addBtnDiv.className = "btn-div";
    addBtn.className = "btn";
    addBtn.innerText = "+";

    addBtn.onclick = fun;

    return addBtnDiv;
}

export default AddButton;