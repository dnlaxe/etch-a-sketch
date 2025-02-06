const grid = document.querySelector('.grid')
const button = document.querySelector('button');
const all = document.querySelector('*');
const header = document.querySelector('.header');

header.style.backgroundColor = randomColor();
button.style.color = header.style.backgroundColor;
all.style.color = header.style.backgroundColor;

button.addEventListener("click", () => {
    const size = prompt('Grid length (1-100): ');
    if (size > 100) {
        alert("Please choose a value under 100."); 
        return;
    }

    grid.innerHTML = "";
    
    header.style.backgroundColor = randomColor();
    button.style.color = header.style.backgroundColor;
    all.style.color = header.style.backgroundColor;
    
    for (i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < size; j++) {
        const column = document.createElement('div');
        let opacity = 0;
        column.className = 'column';
        column.style.opacity = opacity;

        column.addEventListener("mouseenter", () => {
            if (opacity < 1) {
                opacity += 0.1;
                column.style.opacity = opacity;
            }

        const getComputedStyle = window.getComputedStyle(column);
        console.log(getComputedStyle.getPropertyValue('opacity'));
        
        column.style.backgroundColor = randomColor();
        });

        row.appendChild(column);
    }
    grid.appendChild(row);
    };

});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}