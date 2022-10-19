import pixel from './pixel.js';

export default function Grid() {
  const grid = $('<div></div>').addClass('grid');

  for (let i = 0; i < 10; ++i) {
    const row = $('<div></div>').addClass('d-flex flex-row');
    grid.append(row);
    for (let j = 0; j < 10; ++j) {
      row.append(pixel());
    }
  }
  return grid;
}
