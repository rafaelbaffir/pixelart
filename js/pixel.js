import {selectedColor} from "./colorPicker.js";

export default function Pixel(){
    const btn = document.createElement('btn');
    btn.className = 'pixel';
    btn.style.backgroundColor = '#fff';
    btn.onclick = () =>{ btn.style.backgroundColor = selectedColor; }
    return btn;
}