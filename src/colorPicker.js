const colors = ['#000', '#f60', '#f9f', '#61ff', '#f6f', '#ff0', '#0ff', '#008'];

export let selectedColor = '#fff';

export default function ColorPicker() {
  const div = $('<div></div>').addClass('colorPicker');
  colors.forEach((color) => {
    div.append($('<button></button>')
        .addClass('pickableColor')
        .css('background', color)
        .on('click', function() {
          selectedColor = color;
          $('selected').removeClass('selected');
          $(this).addClass('selected');
        }));
  });
  return div;
}
