const grid = document.querySelector('.grid')
const button = document.querySelector('button');

button.addEventListener("click", () => {
    const size = prompt('Grid length (1-100): ');

    grid.innerHTML = "";
    
    for (i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < size; j++) {
        const column = document.createElement('div');
        column.className = 'column';

        column.addEventListener("mouseenter", () => {
        column.style.backgroundColor = 'black';
        });

        row.appendChild(column);
    }
    grid.appendChild(row);
    };

});