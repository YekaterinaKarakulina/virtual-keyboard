import {Key} from "./Key";

export class Keyboard {
 
    constructor({name}) {
        this.name = name;
    }

    //generate container foe keyboard
    generateKeyboardContainer() {
        let keyboardContainer = document.createElement('div');
        keyboardContainer.classList.add('keyboard');
        let keys = document.createElement('div');
        keys.classList.add('keyboard__keys');
        keyboardContainer.append(keys);
        document.body.append(keyboardContainer);
    }

    //generate all keys from array with key`s names
    generateKeys(keysArray) {
        for(let i=0; i<keysArray.length; i++) {
            for(let j=0; j<keysArray[i].length; j++) {
                let key = new Key();
                document.querySelector('.keyboard__keys').append(key.generateKey(keysArray[i][j]));
            }
            document.querySelector('.keyboard__keys').append(document.createElement('br')); 
        }
    }

                 
    
}