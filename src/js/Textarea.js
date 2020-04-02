export class Textarea {
    constructor({name}) {
        this.name = name;
    }

    generateTextarea() {
        let textarea = document.createElement('textarea');
        textarea.classList.add('keyboard-textarea');
        document.body.appendChild(textarea);
    }
}