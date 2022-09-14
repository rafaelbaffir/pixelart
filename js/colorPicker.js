const colors = ['#000', '#f60', '#f9f', '#61ff', '#f6f', '#ff0', '#0ff', '#008' ];

export let selectedColor = '#fff';

export default function ColorPicker(){
    const div = document.createElement('div');
    div.className = 'colorPicker';
    colors.forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'pickableColor'
        btn.style.backgroundColor = color;
        btn.onclick = () => {
            selectedColor = color;
        }
        div.appendChild(btn);
    })
    return div;
}