import { selectedColor } from './colorPicker.js';

/**
 * pixel.js
 * @return {object}
 */


export default function Pixel() {
  return $('<button></button>').addClass('pixel')
    .on('click', function () {
        // eslint-disable-next-line no-invalid-this
        $(this).animate({ backgroundColor: selectedColor }, 1000);
  });
}
