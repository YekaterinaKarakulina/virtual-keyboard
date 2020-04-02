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

generateKeys(keysArray) {
    for(let i=0; i<keysArray.length; i++) {
        for(let j=0; j<keysArray[i].length; j++) {
            let key = document.createElement('button');
            key.classList.add('keyboard__key');
            key.innerHTML = keysArray[i][j];
            document.querySelector('.keyboard__keys').append(key);
        }
        document.querySelector('.keyboard__keys').append(document.createElement('br')); 
    }
}

// generateKey(keyName) {
//     let key = document.createElement('button');
//     key.classList.add(keyName);
//     key.classList.add('keyboard__key');
//     key.innerHTML = keyName;
//     document.querySelector('.keyboard__keys').append(key);
// }


}