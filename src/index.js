import Textarea from './js/Textarea';
import Keyboard from './js/Keyboard';

sessionStorage.setItem('isLanguageEng', sessionStorage.getItem('isLanguageEng'));

window.onload = function () {
  // create textarea
  const element = new Textarea('keyboard-textarea');
  element.generateTextarea();

  // create keyboard container
  const keyboard = new Keyboard('keyboard');
  keyboard.generateKeyboardContainer();

  // create and render keys
  const data = sessionStorage.getItem('isLanguageEng'); // if data == true - eng, else ru
  keyboard.renderKeys(data, false); // isCapsLockOn - false

  // monitor keyboard events
  keyboardHandler(keyboard);

  // monitor mouse events
  mouseHandler(keyboard);
};

let isCapsLockOn = false;
let isLanguageEng = sessionStorage.getItem('isLanguageEng');
let textareaContent = '';
let keyContent = '';

function keyboardHandler(keyboard) {
  document.addEventListener('keydown', (event) => {
    console.log(event);
    pressedKeyHandler(event.code);
    printToTextarea(keyboard, event.code, event.key);
    event.preventDefault();
  });
  document.addEventListener('keyup', (event) => {
    unpressedKeyHandler(event.code);
  });
}

function mouseHandler(keyboard) {
  let keyCode = '';
  document.addEventListener('mousedown', (event) => {
    const keyName = event.target.innerHTML;
    if (event.target.classList[event.target.classList.length - 1] === 'active') {
      keyCode = event.target.classList[event.target.classList.length - 2];
    } else {
      keyCode = event.target.classList[event.target.classList.length - 1];
    }
    pressedKeyHandler(keyCode);
    printToTextarea(keyboard, keyCode, keyName);
    event.preventDefault();
  });

  document.addEventListener('mouseup', (event) => {
    if (event.target.classList[event.target.classList.length - 1] === 'active') {
      keyCode = event.target.classList[event.target.classList.length - 2];
    } else {
      keyCode = event.target.classList[event.target.classList.length - 1];
    }
    unpressedKeyHandler(keyCode);
  });
}

function printToTextarea(keyboard, keyCode, keyName) {
  /*if (keyName === 'Meta') {
    keyContent = '';
    checkLanguageSwitch();
  } */

if (keyCode === 'Backspace') {
    keyContent = textareaContent.substring(0, textareaContent.length - 1);
    textareaContent = '';
  } else if (keyCode === 'Tab') {
    keyContent = '    ';
  } else if (keyCode === 'Delete') {
    keyContent = '';
  } else if (keyCode === 'CapsLock') {
    isCapsLockOn = !isCapsLockOn;
    keyContent = '';
    activateCapsLock(keyboard, sessionStorage.getItem('isLanguageEng'));
  } else if (keyCode === 'Enter') {
    keyContent = '\n';
  } else if (keyCode === 'Space') {
    keyContent = ' ';
  } 
  else if(keyCode === 'ShiftLeft'  || keyCode === 'ControlLeft') {
    let firstKeyPressedTime = new Date();
    keyContent = '';
    document.addEventListener('keydown', (event) => {
      let secondKeyPressedTime = new Date();
      if(event.code === 'ControlLeft' || event.code === 'ShiftLeft') {
        if(secondKeyPressedTime - firstKeyPressedTime < 200){
          switchLanguage();
          console.log('<<<<<>>>>>');
        }
      }
    });
  }

 
  else if (keyCode === 'ShiftRight') {
    keyContent = '';
  } else if (keyCode === 'ControlRight') {
    keyContent = '';
  } else if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    keyContent = '';
  } else if (keyCode === 'ArrowUp') {
    keyContent = '↑';
  } else if (keyCode === 'ArrowLeft') {
    keyContent = '←';
  } else if (keyCode === 'ArrowDown') {
    keyContent = '↓';
  } else if (keyCode === 'ArrowRight') {
    keyContent = '→';
  } else {
    const keysElements = document.querySelectorAll('.keyboard__key');
    for (let i = 0; i < keysElements.length; i += 1) {
      if (keysElements[i].classList.contains(keyCode)) {
        keyContent = keysElements[i].innerHTML;
      }
    }
  }
  textareaContent += keyContent;
  document.querySelector('.keyboard-textarea').innerHTML = textareaContent;
}

function activateCapsLock(keyboard) {
  clearKeyboardContainer();
  keyboard.renderKeys(sessionStorage.getItem('isLanguageEng'), isCapsLockOn);
  if (isCapsLockOn === true) {
    document.querySelector('.keyboard__key_activatable').classList.add('active');
  } else {
    document.querySelector('.keyboard__key_activatable').classList.remove('active');
  }
}

/*function checkLanguageSwitch() {
  isLanguageEng = !isLanguageEng;
  sessionStorage.setItem('isLanguageEng', isLanguageEng);
  clearKeyboardContainer();
  const keyboard = new Keyboard('keyboard');
  keyboard.renderKeys(sessionStorage.getItem('isLanguageEng'), isCapsLockOn);
  document.querySelector('.AltLeft').classList.add('pressed');
  document.querySelector('.ShiftLeft').classList.add('pressed');
}*/



function switchLanguage() {
  console.log('yes switchLanguage');
  isLanguageEng = !isLanguageEng;
  sessionStorage.setItem('isLanguageEng', isLanguageEng);
  clearKeyboardContainer();
  const keyboard = new Keyboard('keyboard');
  keyboard.renderKeys(sessionStorage.getItem('isLanguageEng'), isCapsLockOn);
}


function clearKeyboardContainer() {
  document.querySelector('.keyboard__keys').innerHTML = '';
}

function pressedKeyHandler(keyCode) {
  document.querySelectorAll('.keyboard__key').forEach((element) => {
    if (element.classList.contains(keyCode)) {
      element.classList.add('pressed');
    }
  });
}

function unpressedKeyHandler(keyCode) {
  document.querySelectorAll('.keyboard__key').forEach((element) => {
    if (element.classList.contains(keyCode)) {
      element.classList.remove('pressed');
    }
  });
}
