import { Keyboard } from './js/Keyboard';
import { Textarea } from './js/Textarea';
import { Key } from './js/Key';

window.onload = function () {
  console.log('hello');

  // create textarea
  const element = new Textarea('my area');
  element.generateTextarea();

  // create keyboard container
  const keyboard = new Keyboard('keyboard');
  keyboard.generateKeyboardContainer();

  // create and render keys
  keyboard.renderKeys(true, false); // isLanguageEng - true; isCapsLockOn - false

  // monitor keyboard events
  keyboardHandler(keyboard);


  // monitor mouse events
  mouseHandler(keyboard);
};

let isCapsLockOn = false;
let isLanguageEng = true;

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
    const keyCode = event.target.classList[event.target.classList.length - 1];
    const key = new Key(event.key);
    key.pressedKeyHandler(keyCode);
    printToTextarea(keyboard, keyCode, keyName);
    event.preventDefault();
  });

  document.addEventListener('mouseup', (event) => {
    const keyCode = event.target.classList[event.target.classList.length - 1];
    const key = new Key(event.key);
    key.unpressedKeyHandler(keyCode);
  });
}

let textareaContent = '';
let keyContent = '';

function printToTextarea(keyboard, keyCode, keyName) {
  switch (keyCode) { // for special buttons
    case 'Backspace':
      keyContent = textareaContent.substring(0, textareaContent.length - 1);
      textareaContent = '';
      break;
    case 'Tab':
      keyContent = '    ';
      break;
    case 'Delete':
      keyContent = '';
      break;
    case 'CapsLock':
      isCapsLockOn = !isCapsLockOn;
      keyContent = '';
      activateCapsLock(keyboard, isLanguageEng);
      break;
    case 'Enter':
      keyContent = '\n';
      break;
    case 'Space':
      keyContent = ' ';
      break;
    case 'ArrowLeft':
      keyContent = '←';
      break;
    case 'ArrowRight':
      keyContent = '→';
      break;
    case 'ArrowUp':
      keyContent = '↑';
      break;
    case 'ArrowDown':
      keyContent = '↓';
      break;
    default: // for Shift, Ctrl, Alt
      switch (keyName) {
        case 'Shift':
          keyContent = '';
          isLanguageEng = !isLanguageEng;
          checkLanguageSwitch(isLanguageEng);
          break;
        case 'Control':
          keyContent = '';
          break;
        case 'Alt':
          keyContent = '';
          break;
        default: // for others
          const keysElements = document.querySelectorAll('.keyboard__key');
          for (let i = 0; i < keysElements.length; i++) {
            if (keysElements[i].classList.contains(keyCode)) {
              keyContent = keysElements[i].innerHTML;
            }
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

function checkLanguageSwitch(isLanguageEng) {
  const startTime = new Date().getTime();
  const allowedTime = 300;

  document.addEventListener('keydown', (event) => {
    const endTime = new Date().getTime();
    const keyName = event.key;

    if (keyName === 'Shift' || keyName === 'Control') {
      if (endTime - startTime < allowedTime) {
        clearKeyboardContainer();
        const keyboard = new Keyboard('keyboard');
        keyboard.renderKeys(isLanguageEng, isCapsLockOn);
      }
    }
  });
}


function clearKeyboardContainer() {
  document.querySelector('.keyboard__keys').innerHTML = '';
}
