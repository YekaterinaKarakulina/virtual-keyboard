export class Key {

    constructor(keyName) {
        this.keyName = keyName;
    }
    
    //generate key
    generateKey() {
        let key = document.createElement('button');
        key.classList.add('keyboard__key');
        key.innerHTML = this.keyName;

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
    
    
    
/*    constructor() { }
   
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
        if(keyName === 'CapsLock') {
            key.classList.add('keyboard__key_activatable');
            key.classList.add('keyboard__key_wide');
        }
        return key;
    }
*/
   
   
   /* lightKey(keyName) {
        document.querySelectorAll('.keyboard__key').forEach(element => {        
            if(element.innerHTML === keyName) {
                element.classList.add('aaa');
            }
        });
    }*/


}