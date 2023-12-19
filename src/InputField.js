    function InputField(content,id,type) {
        const inputDiv = document.createElement('div');
        inputDiv.className = `${id}-field`;

        const label = document.createElement('label');
        label.setAttribute('for', `${id}`);
        label.innerText = `${content}`;

        const input = document.createElement('input');
        input.id = `${id}`;
        input.setAttribute('type', `${type}`);
        

        inputDiv.appendChild(label);
        inputDiv.appendChild(input);

        return inputDiv;
    }

export default InputField;