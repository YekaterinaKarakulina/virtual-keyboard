!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class a{constructor(e,t){this.keyName=e,this.isUpperCase=t}generateKey(){let e=document.createElement("button");e.classList.add("keyboard__key"),e.classList.add(this.keyName);let t="";return t="ShiftLeft"===this.keyName||"ShiftRight"===this.keyName?"Shift":"ControlLeft"===this.keyName||"ControlRight"===this.keyName?"Ctrl":"AltLeft"===this.keyName||"AltRight"===this.keyName?"Alt":"ArrowLeft"===this.keyName?"◄":"ArrowRight"===this.keyName?"►":"ArrowUp"===this.keyName?"▲":"ArrowDown"===this.keyName?"▼":this.keyName,this.keyName.length<2?!0===this.isUpperCase?(console.log("upper"),e.innerHTML=t.toUpperCase()):(console.log("lower"),e.innerHTML=t.toLowerCase()):e.innerHTML=t,"Space"===this.keyName&&e.classList.add("keyboard__key_extra-wide"),"Tab"!==this.keyName&&"Ctrl"!==this.keyName&&"Shift"!==this.keyName&&"Enter"!==this.keyName&&"Backspace"!==this.keyName||e.classList.add("keyboard__key_wide"),"CapsLock"===this.keyName&&(e.classList.add("keyboard__key_activatable"),e.classList.add("keyboard__key_wide")),e}pressedKeyHandler(e,t){document.querySelectorAll(".keyboard__key").forEach(r=>{(r.classList.contains(e)||r.classList.contains(t))&&r.classList.add("pressed")})}unpressedKeyHandler(e,t){document.querySelectorAll(".keyboard__key").forEach(r=>{(r.classList.contains(e)||r.classList.contains(t))&&r.classList.remove("pressed")})}}class n{constructor({name:e}){this.name=e}generateKeyboardContainer(){let e=document.createElement("div");e.classList.add("keyboard");let t=document.createElement("div");t.classList.add("keyboard__keys"),e.append(t),document.body.append(e)}renderKeys(e,t){let r=document.querySelector(".keyboard__keys");this.generateKeys(e,t).forEach(e=>{r.append(e.generateKey()),"Backspace"!==e.keyName&&"Delete"!==e.keyName&&"Enter"!==e.keyName&&"ArrowUp"!==e.keyName||r.append(document.createElement("br"))})}generateKeys(e,t){let r=[];for(let n=0;n<e.length;n++)for(let o=0;o<e[n].length;o++)r.push(new a(e[n][o],t));return r}}class o{constructor({name:e}){this.name=e}generateTextarea(){let e=document.createElement("textarea");e.classList.add("keyboard-textarea"),document.body.appendChild(e)}}const s=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","q","w","e","r","t","y","u","i","o","p","[","]","Delete"],["CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter"],["ShiftLeft","\\","z","x","c","v","b","n","m",",",".","/","ShiftRight","ArrowUp"],["ControlLeft","Win","AltLeft","Space","AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight"]];window.onload=function(){console.log("hello"),new o("my area").generateTextarea();let e=new n("eng-keyboard");e.generateKeyboardContainer(),e.renderKeys(s,!1),function(e){let t="",r="";document.addEventListener("keydown",n=>{let o=n.key,i=n.code;if(console.log(n),new a(n.key).pressedKeyHandler(o,i),1===o.length)r=o;else switch(o){case"Backspace":r="";break;case"Tab":r="    ";break;case"Delete":r="";break;case"CapsLock":c=!c,r="",function(e){document.querySelector(".keyboard__keys").innerHTML="",e.renderKeys(s,c),!0===c?document.querySelector(".keyboard__key_activatable").classList.add("active"):document.querySelector(".keyboard__key_activatable").classList.remove("active")}(e);break;case"Enter":r="\n";break;case"Shift":r="";break;case"ArrowLeft":r="←";break;case"ArrowRight":r="→";break;case"ArrowUp":r="↑";break;case"ArrowDown":r="↓"}t+=r,document.querySelector(".keyboard-textarea").innerHTML=t,n.preventDefault()}),document.addEventListener("keyup",e=>{let t=e.key,r=e.code;new a(e.key).unpressedKeyHandler(t,r)})}(e)};let c=!1}]);