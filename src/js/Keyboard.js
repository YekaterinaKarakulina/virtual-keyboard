import {Key} from "./Key";

const keyboard_keyCodes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft','Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

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
    renderKeys(isLanguageEng, isUppercase) {
        let keys_container = document.querySelector('.keyboard__keys');
        if(isLanguageEng == 'true') {
            console.log('eng');
            this.generateKeys(keyboard_keyCodes, keyboard_eng, isUppercase).forEach(key => {
                keys_container.append(key.generateKey());
                if(key.keyName === 'Backspace' || key.keyName === 'Delete' || key.keyName === 'Enter' || key.keyName === 'ArrowUp') {
                    keys_container.append(document.createElement('br'));
                }
            });
        } else  {
            console.log('ru');
            this.generateKeys(keyboard_keyCodes ,keyboard_ru, isUppercase).forEach(key => {
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