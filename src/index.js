import {Keyboard} from './js/Keyboard';
import {Textarea} from './js/Textarea';
import { Key } from './js/Key';

window.onload = function() {
    console.log("hello");

    //create textarea
    let element = new Textarea('my area');
    element.generateTextarea();

    //create keyboard container
    let keyboard = new Keyboard('keyboard');
    keyboard.generateKeyboardContainer();

    
    //create and render keys
    //------------------------//
    let keyboardLanguage = 'ru';
   
    keyboard.renderKeys(keyboardLanguage, false);

    //monitor keyboard events
    keyboardHandler(keyboard, keyboardLanguage);


}



let isCapsLockOn = false;
let count = 0;


function keyboardHandler(keyboard, keyboardLanguage){
    let textarea_content = '';
    let key_content = '';

    document.addEventListener('keydown', (event) => {
        let keyElem = document.querySelector('.' + event.key.toLowerCase());
        let keyName = event.key;
        let keyCode = event.code;
        console.log(event);
        
        let key = new Key(event.key);
        key.pressedKeyHandler(keyName, keyCode);
        if(keyName.length === 1) {
            key_content = keyElem.innerHTML;
        } else {
            switch (keyName) {
                case 'Backspace': 
                    key_content = textarea_content.substring(0, textarea_content.length-1);
                    textarea_content = '';
                    break;
                case 'Tab': 
                    key_content = '    ';
                    break;
                case 'Delete': 
                    key_content = ''; 
                    break;
                case 'CapsLock':
                    isCapsLockOn = !isCapsLockOn;
                    key_content = '';
                    activateCapsLock(keyboard, keyboardLanguage);
                    break;
                case 'Enter':
                    key_content = '\n';
                    break;
                case 'Shift':
                    key_content = '';
                    checkLanguageSwitch(keyboard, keyboardLanguage);
                    break;
                case 'Control':
                    key_content = '';
                    checkLanguageSwitch(keyboard, keyboardLanguage);
                    break;
                case 'Alt':
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



function activateCapsLock(keyboard, keyboardLanguage) {
    clearKeyboardContainer();
    keyboard.renderKeys(keyboardLanguage, isCapsLockOn);    //---todo toggle
    if(isCapsLockOn === true) {
        document.querySelector('.keyboard__key_activatable').classList.add('active');
    } else {
        document.querySelector('.keyboard__key_activatable').classList.remove('active');
    }
}


function checkLanguageSwitch(keyboard, keyboardLanguage) {
    let startTime = new Date().getTime();
    let allowedTime = 300;
    
    document.addEventListener('keydown', (event) => {
        let endTime = new Date().getTime();
        let keyName = event.key;
            
        if(keyName === 'Shift' || keyName === 'Control') {
            if(endTime - startTime < allowedTime) {
                count ++;
                console.log('count' + count);
                clearKeyboardContainer();
                if(count%2 == 0) {
                    keyboardLanguage = 'eng';
                } else {
                    keyboardLanguage = 'ru';
                }
                keyboard.renderKeys(keyboardLanguage, false);   
            }
        } 
    });
}

function clearKeyboardContainer() {
    document.querySelector('.keyboard__keys').innerHTML = '';
}