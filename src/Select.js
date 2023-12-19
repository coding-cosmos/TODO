function Select(name,...options) {
    const selectDiv = document.createElement('div');
    selectDiv.className = `${name}-select`;

    const label = document.createElement('label');
    label.setAttribute('for', `${name}`);
    label.innerText = `${name}`;

    const select = document.createElement('select');
    select.id = `${name}`;

    options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = `${option}`;
        optionElement.innerText = `${option}`;
        select.appendChild(optionElement);
    })

    selectDiv.appendChild(label);
    selectDiv.appendChild(select);
    return selectDiv;
}

export default Select;