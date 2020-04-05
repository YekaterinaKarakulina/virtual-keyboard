import {Key} from "./Key";

const keyboard_eng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['ShiftLeft','\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

const keyboard_ru = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['ShiftLeft','\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];
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
    renderKeys(keyboardLanguage, isUppercase) {
        console.log('lang' + keyboardLanguage);
        let keys_container = document.querySelector('.keyboard__keys');
        if(keyboardLanguage) {
            this.generateKeys(keyboard_eng, keyboard_eng, isUppercase).forEach(key => {
                keys_container.append(key.generateKey());
                if(key.keyName === 'Backspace' || key.keyName === 'Delete' || key.keyName === 'Enter' || key.keyName === 'ArrowUp') {
                    keys_container.append(document.createElement('br'));
                }
            });
        }
        else  {
            this.generateKeys(keyboard_eng ,keyboard_ru, isUppercase).forEach(key => {
                keys_container.append(key.generateKey());
                if(key.keyName === 'Backspace' || key.keyName === 'Delete' || key.keyName === 'Enter' || key.keyName === 'ArrowUp') {
                    keys_container.append(document.createElement('br'));
                }
            });
        }  
    }

    //generate keys
    generateKeys(keysClassArray,  keysTitleArray, isUppercase){
        let keys = [];
        for(let i=0; i<keysTitleArray.length; i++) {
            for(let j=0; j<keysTitleArray[i].length; j++) {
                keys.push(new Key(keysClassArray[i][j], keysTitleArray[i][j], isUppercase));
            }
        }
        return keys;
    }  
}