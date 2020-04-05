export class Key {

    constructor(keyClass, keyName, isUpperCase) {
        this.keyName = keyName;
        this.keyClass = keyClass;
        this.isUpperCase = isUpperCase;

    }
    
    //generate key
    generateKey() {
        let key = document.createElement('button');
        key.classList.add('keyboard__key');
        key.classList.add(this.keyClass);
        let keyName = '';


        if(this.keyName === 'ShiftLeft' || this.keyName === 'ShiftRight') {
            keyName = 'Shift';
        } else if(this.keyName === 'ControlLeft' || this.keyName === 'ControlRight') {
            keyName = 'Ctrl';
        } else if(this.keyName === 'AltLeft' || this.keyName === 'AltRight') {
            keyName = 'Alt';
        } else if(this.keyName === 'Space') {
            keyName = '';
        } else if(this.keyName === 'ArrowLeft') {
            keyName = '◄';
        } else if(this.keyName === 'ArrowRight') {
            keyName = '►';
        } else if(this.keyName === 'ArrowUp') {
            keyName = '▲';
        } else if(this.keyName === 'ArrowDown') {
            keyName = '▼';
        } else {
            keyName = this.keyName;
        }

        if(this.keyName.length < 2) {
            if(this.isUpperCase === true) {
                console.log('upper');
                key.innerHTML = keyName.toUpperCase();
            } else {
                console.log('lower');
                key.innerHTML = keyName.toLowerCase();
            }
        } else {
            key.innerHTML = keyName;
        }
        if(this.keyName === 'Space') {
            key.classList.add('keyboard__key_extra-wide');
        }
        if(this.keyName === 'Tab' || this.keyName === 'Ctrl' || this.keyName === 'Shift' || this.keyName === 'Enter' || this.keyName === 'Backspace') {
            key.classList.add('keyboard__key_wide');
        }
        if(this.keyName === 'CapsLock') {
            key.classList.add('keyboard__key_activatable');
            key.classList.add('keyboard__key_wide');
        }
        return key;
    }

    
    
    pressedKeyHandler(keyName, keyCode) {
        document.querySelectorAll('.keyboard__key').forEach(element => {   
            if(element.classList.contains(keyName) || element.classList.contains(keyCode)) {
                element.classList.add('pressed');
            }
        });
    }

    unpressedKeyHandler(keyName, keyCode) {
        document.querySelectorAll('.keyboard__key').forEach(element => {        
            if(element.classList.contains(keyName) || element.classList.contains(keyCode)) {
                element.classList.remove('pressed');
            }
        });
    }


}