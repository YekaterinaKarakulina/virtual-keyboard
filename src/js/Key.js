export class Key {

    constructor() { }

    generateKey(keyName) {
        let key = document.createElement('button');
        key.classList.add('keyboard__key');
        key.innerHTML = keyName;

        if(keyName === 'Space') {
            key.classList.add('keyboard__key_extra-wide');
        }
        if(keyName === 'Tab' || keyName === 'Ctrl' || keyName === 'Shift' || keyName === 'Enter' || keyName === 'Backspace') {
            key.classList.add('keyboard__key_wide');
        }
        return key;
    }

    pressKey(key) {

    }


}