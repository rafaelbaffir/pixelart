import {selectedColor} from "./colorPicker.js";

export default function Pixel(){
    const btn = $('<button></button>').addClass('pixel').on('click', function(){
        $(this).animate({backgroundColor:selectedColor},1000)
    })
    return btn;
}