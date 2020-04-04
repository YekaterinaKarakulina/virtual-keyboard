import {Key} from "./Key";

export class Keyboard {
 
    constructor({name}) {
        this.name = name;
    }

    //generate container for keyboard
    generateKeyboardContainer() {
        let keyboardContainer = document.createElement('div');
        keyboardContainer.classList.add('keyboard');
        let keys = document.createElement('div');
        keys.classList.add('keyboard__keys');
        keyboardContainer.append(keys);
        document.body.append(keyboardContainer);
    }

    //render keys
    renderKeys(keysArray, isUppercase) {
        let keys_container = document.querySelector('.keyboard__keys');
        this.generateKeys(keysArray, isUppercase).forEach(key => {
            keys_container.append(key.generateKey());
            if(key.keyName === 'Backspace' || key.keyName === 'Delete' || key.keyName === 'Enter' || key.keyName === 'ArrowUp') {
                keys_container.append(document.createElement('br'));
            }
        });
    }

    //generate keys
    generateKeys(keysArray, isUppercase){
        let keys = [];
        for(let i=0; i<keysArray.length; i++) {
            for(let j=0; j<keysArray[i].length; j++) {
                keys.push(new Key(keysArray[i][j], isUppercase));
            }
        }
        return keys;
    }

  

                 
    
}
