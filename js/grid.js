import pixel from "./pixel.js";

export default function Grid(){
    const grid = document.createElement('div');
    grid.className = 'grid';
    for(let i = 0; i < 10; ++i)
    {
        const row = document.createElement('div');
        row.className = "d-flex flex-row";
        grid.appendChild(row);
        for(let j = 0; j < 10; ++j)
        {
            row.appendChild(pixel());
        }
    }
    return grid;
}