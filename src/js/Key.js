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
        if(keyName === 'CapsLock') {
            key.classList.add('keyboard__key_activatable');
            key.classList.add('keyboard__key_wide');
        }
        return key;
    }

    lightKey(keyName) {
        document.querySelectorAll('.keyboard__key').forEach(element => {        
            if(element.innerHTML === keyName) {
                element.classList.add('aaa');
            }
        });
    }


    returnKeyValueToPrint(keyName) {
        let key_content = '';
        key_content = keyName;
         
        if(keyName.length === 1) {
            key_content = keyName;
        } else {
            switch (keyName) {
            case 'Enter':
                key_content = '\n';
                break;
            case 'Tab': 
                key_content = '    ';
                break;
            }
        }
        return key_content;
      

    }




}