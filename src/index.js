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
    keyboard.renderKeys(true, false);   //isLanguageEng - true; isCapsLockOn - false

    //monitor keyboard events
    keyboardHandler();

}



let isCapsLockOn = false;
let isLanguageEng = true;

function keyboardHandler( ){
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
                    activateCapsLock(isLanguageEng);
                    break;
                case 'Enter':
                    key_content = '\n';
                    break;
                case 'Shift':
                    key_content = '';
                    isLanguageEng = !isLanguageEng;
                    checkLanguageSwitch(isLanguageEng);
                    break;
                case 'Control':
                    key_content = '';
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



function activateCapsLock(isLanguageEng) {
    clearKeyboardContainer();
    keyboard.renderKeys(isLanguageEng, isCapsLockOn);    //---todo toggle
    if(isCapsLockOn === true) {
        document.querySelector('.keyboard__key_activatable').classList.add('active');
    } else {
        document.querySelector('.keyboard__key_activatable').classList.remove('active');
    }
}

function checkLanguageSwitch(isLanguageEng) {
    let startTime = new Date().getTime();
    let allowedTime = 300;
   
    document.addEventListener('keydown', (event) => {
        let endTime = new Date().getTime();
        let keyName = event.key;

        if(keyName === 'Shift' || keyName === 'Control') {
            if(endTime - startTime < allowedTime) {
                clearKeyboardContainer(); 
                let keyboard = new Keyboard('keyboard');
                keyboard.renderKeys(isLanguageEng, isCapsLockOn); 
            }
        } 
    });
}


function clearKeyboardContainer() {
    document.querySelector('.keyboard__keys').innerHTML = '';
}