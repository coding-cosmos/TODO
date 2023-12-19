function TextArea(name) {
    const textAreaDiv = document.createElement('div');
    textAreaDiv.className = `${name}-field`;

    const textarea = document.createElement('textarea');
    textarea.id = `${name}`;

    const label = document.createElement('label');
    label.setAttribute('for', `${name}`);
    label.innerText = `${name}`;

    textAreaDiv.appendChild(label);
    textAreaDiv.appendChild(textarea);

    return textAreaDiv;
}

export default TextArea;