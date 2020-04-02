import {Keyboard} from './js/Keyboard';
import {Textarea} from './js/Textarea';

const keyboard_eng = [
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up',
    'Ctrl', 'Alt', 'Backspace', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'
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
    for(let i=0; i<keyboard_eng.length; i++)
    {
        keyboard.generateKey(keyboard_eng[i]);
    }
    
    
}