export class Keyboard {
 
    constructor({name}) {
        this.name = name;
    }

generateKeyboardContainer() {
    let keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard');
    let keys = document.createElement('div');
    keys.classList.add('keyboard__keys');
    keyboardContainer.append(keys);
    document.body.append(keyboardContainer);
}

generateKey(keyName) {
    let key = document.createElement('button');
    key.classList.add(keyName);
    key.classList.add('keyboard__key');
    key.innerHTML = keyName;
    document.querySelector('.keyboard__keys').append(key);
}


}