export class Key {

    constructor(keyName, isUpperCase) {
        this.keyName = keyName;
        this.isUpperCase = isUpperCase;
    }
    
    //generate key
    generateKey() {
        let key = document.createElement('button');
        key.classList.add('keyboard__key');
        if(this.keyName.length < 2) {
                if(this.isUpperCase === true)
            {
                console.log('upper');
                key.innerHTML = this.keyName.toUpperCase();
            } else {
                console.log('lower');
                key.innerHTML = this.keyName.toLowerCase();
            }
        } else {
            key.innerHTML = this.keyName
        }
       

       // key.innerHTML = this.keyName;

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

    
    
   /* lightKey(keyName) {
        document.querySelectorAll('.keyboard__key').forEach(element => {        
            if(element.innerHTML === keyName) {
                element.classList.add('aaa');
            }
        });
    }*/


}