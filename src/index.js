import {Keyboard} from './js/Keyboard';
import {Textarea} from './js/Textarea';
import { Key } from './js/Key';

const keyboard_eng = [
    ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
    ['Shift','\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'Left', 'Down', 'Right']
];

window.onload = function() {
    console.log("hello");

    //create textarea
    let element = new Textarea('my area');
    element.generateTextarea();

    //create keyboard container
    let keyboard = new Keyboard('eng-keyboard');
    keyboard.generateKeyboardContainer();

    //create keys
    //keyboard.generateKeys(keyboard_eng);
    keyboard.renderKeys(keyboard_eng);
    keyboard.renderBRs();

    //monitor keyboard events
  //  keyboardHandler();


}







/*
const  keyboardHandler = () => {
    let textarea_content = '';
    let key_content = '';

    let isCapsLockOn = false;

    document.addEventListener('keydown', (event) => {
        let key = new Key();
        let keyName = event.key;
        key.lightKey(keyName);


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
            
            case 'CapsLock':
                isCapsLockOn = !isCapsLockOn;
                console.log(isCapsLockOn);


            }
        }
        textarea_content = textarea_content + key_content;
        document.querySelector('.keyboard-textarea').innerHTML = textarea_content;
        event.preventDefault();
    });        
}*/
        
       