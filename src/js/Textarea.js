export class Textarea {
  constructor({ name }) {
    this.name = name;
  }

  generateTextarea() {
    const textarea = document.createElement('textarea');
    textarea.classList.add('keyboard-textarea');
    document.body.appendChild(textarea);
  }
}
