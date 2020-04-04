import {Keyboard} from './js/Keyboard';
import {Textarea} from './js/Textarea';
import { Key } from './js/Key';

const keyboard_eng = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['ShiftLeft','\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight', 'ArrowUp'],
    ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

window.onload = function() {
    console.log("hello");

    //create textarea
    let element = new Textarea('my area');
    element.generateTextarea();

    //create keyboard container
    let keyboard = new Keyboard('eng-keyboard');
    keyboard.generateKeyboardContainer();

    //create and render keys
    keyboard.renderKeys(keyboard_eng, false);
    
    //monitor keyboard events
    keyboardHandler(keyboard);


}



let isCapsLockOn = false;


function keyboardHandler(keyboard){
    let textarea_content = '';
    let key_content = '';

    document.addEventListener('keydown', (event) => {
        let keyName = event.key;
        let keyCode = event.code;
        console.log(event);
        
        let key = new Key(event.key);
        key.pressedKeyHandler(keyName, keyCode);

        if(keyName.length === 1) {
            
                    key_content = keyName;
     
        } else {
            switch (keyName) {
            case 'Backspace': //TODO
                key_content = '';
                break;
            case 'Tab': 
                key_content = '    ';
                break;
            case 'Delete': 
                key_content = ''; //TODO
                break;
            case 'CapsLock':
                isCapsLockOn = !isCapsLockOn;
                key_content = '';
                activateCapsLock(keyboard);
                break;
            case 'Enter':
                key_content = '\n';
                break;
            case 'Shift':
                key_content = '';
                break;



            case 'ArrowLeft':
                key_content = '←';
                break;
            case 'ArrowRight':
                key_content = '→';
                break;
            case 'ArrowUp':
                key_content = '↑';
                break;
            case 'ArrowDown':
                key_content = '↓';
                break;

            }
        }
        textarea_content = textarea_content + key_content;
        document.querySelector('.keyboard-textarea').innerHTML = textarea_content;
        event.preventDefault();
    });  
    
    

    document.addEventListener('keyup', (event) => {
        let keyName = event.key;
        let keyCode = event.code;
        let key = new Key(event.key);
        key.unpressedKeyHandler(keyName, keyCode);
    });
}

function activateCapsLock(keyboard) {
    document.querySelector('.keyboard__keys').innerHTML = '';
    keyboard.renderKeys(keyboard_eng, isCapsLockOn);
    if(isCapsLockOn === true) {
        document.querySelector('.keyboard__key_activatable').classList.add('active');
    } else {
        document.querySelector('.keyboard__key_activatable').classList.remove('active');
    }
}
       