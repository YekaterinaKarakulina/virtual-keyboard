import { Keyboard } from './js/Keyboard';
import { Textarea } from './js/Textarea';
import { Key } from './js/Key';

sessionStorage.setItem('isLanguageEng', sessionStorage.getItem('isLanguageEng'));

window.onload = function () {
  console.log('hello');
  
  // create textarea
  const element = new Textarea('my area');
  element.generateTextarea();

  // create keyboard container
  const keyboard = new Keyboard('keyboard');
  keyboard.generateKeyboardContainer();

  //add languages switch buttons
  // const text = document.createElement('div');
  // text.classList.add('languages-switch-description');
  // text.innerHTML = 'ShiftLeft + ControlLeft';
  // document.querySelector('.keyboard__keys').appendChild(text);

  // create and render keys
  var data = sessionStorage.getItem('isLanguageEng'); //if data == true - eng, else ru
  //console.log('before render ' + sessionStorage.getItem('isLanguageEng'));
  keyboard.renderKeys(data, false); //isCapsLockOn - false

  // monitor keyboard events
  keyboardHandler(keyboard);

  // monitor mouse events
  mouseHandler(keyboard);
};

let isCapsLockOn = false;
let isLanguageEng = sessionStorage.getItem('isLanguageEng');
let  keyCode = '';
let textareaContent = '';
let keyContent = '';

function keyboardHandler(keyboard) {
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const keyCode = event.code;
    console.log(event);
    const key = new Key(event.key);
    key.pressedKeyHandler(keyCode);
    printToTextarea(keyboard, keyCode, keyName);
    event.preventDefault();
  });
  document.addEventListener('keyup', (event) => {
    const keyCode = event.code;
    const key = new Key(event.key);
    key.unpressedKeyHandler(keyCode);
  });
}

function mouseHandler(keyboard) {
  document.addEventListener('mousedown', (event) => {
    const keyName = event.target.innerHTML;
    if(event.target.classList[event.target.classList.length - 1] === 'active') {
      keyCode = event.target.classList[event.target.classList.length - 2];
    } else {
      keyCode = event.target.classList[event.target.classList.length - 1];
    }
    const key = new Key(event.key);
    key.pressedKeyHandler(keyCode);
    printToTextarea(keyboard, keyCode, keyName);
    event.preventDefault();
  });

  document.addEventListener('mouseup', (event) => {
    if(event.target.classList[event.target.classList.length - 1] === 'active') {
       keyCode = event.target.classList[event.target.classList.length - 2];
    } else {
       keyCode = event.target.classList[event.target.classList.length - 1];
    }
    const key = new Key(event.key);
    key.unpressedKeyHandler(keyCode);
  });
}

function printToTextarea(keyboard, keyCode, keyName) {
  if(keyCode === 'Backspace') {
    keyContent = textareaContent.substring(0, textareaContent.length - 1);
    textareaContent = '';
  } else if(keyCode === 'Tab'){
    keyContent = '    ';
  } else if(keyCode === 'Delete'){
    keyContent = '';
  } else if(keyCode === 'CapsLock'){
    isCapsLockOn = !isCapsLockOn;
    keyContent = '';
    activateCapsLock(keyboard, sessionStorage.getItem('isLanguageEng'));
  } else if(keyCode === 'Enter'){
    keyContent = '\n';
  } else if(keyCode === 'Space'){
    keyContent = ' ';
  } else if(keyCode === 'ShiftLeft') {
    keyContent = '';
    checkLanguageSwitch();
  } else if(keyCode === 'ShiftRight') {
    keyContent = '';
  } else if(keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    keyContent = '';
  } else if(keyCode === 'AltLeft' || keyCode === 'AltRight') {
    keyContent = '';
  } else if(keyCode === 'ArrowUp') {
    keyContent = '↑';
  } else if(keyCode === 'ArrowLeft') {
    keyContent = '←';
  } else if(keyCode === 'ArrowDown') {
    keyContent = '↓';
  } else if(keyCode === 'ArrowRight') {
    keyContent = '→';
  } else {
    const keysElements = document.querySelectorAll('.keyboard__key');
    for (let i = 0; i < keysElements.length; i++) {
      if (keysElements[i].classList.contains(keyCode)) {
        keyContent = keysElements[i].innerHTML;
      }
    }
  }
  textareaContent += keyContent;
  document.querySelector('.keyboard-textarea').innerHTML = textareaContent;
}

function activateCapsLock(keyboard, isLanguageEng) {
  clearKeyboardContainer();
  keyboard.renderKeys(isLanguageEng, isCapsLockOn); // ---todo toggle
  if (isCapsLockOn === true) {
    document.querySelector('.keyboard__key_activatable').classList.add('active');
  } else {
    document.querySelector('.keyboard__key_activatable').classList.remove('active');
  }
}

function checkLanguageSwitch() {
  document.addEventListener('keydown', (event) => {
    const keyCode = event.code;
    // const key = new Key(event.key);
    //key.pressedKeyHandler(keyCode);
    if (keyCode === 'ControlLeft') {
      isLanguageEng = !isLanguageEng;
      sessionStorage.setItem('isLanguageEng', isLanguageEng);
      console.log('switch LANGUAGE' +  sessionStorage.getItem('isLanguageEng'));
      clearKeyboardContainer();
      const keyboard = new Keyboard('keyboard');
      keyboard.renderKeys(sessionStorage.getItem('isLanguageEng'), isCapsLockOn);
    }
  });
 /* document.addEventListener('keyup', (event) => { 
    const key = new Key(event.key);
    key.unpressedKeyHandler(keyCode);
  });*/
}

function clearKeyboardContainer() {
  document.querySelector('.keyboard__keys').innerHTML = '';
}