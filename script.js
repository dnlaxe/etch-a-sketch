const grid = document.querySelector('.grid')

for (i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (j = 0; j < 16; j++) {
        const column = document.createElement('div');
        column.className = 'column';

        column.addEventListener("mouseenter", () => {
        column.style.backgroundColor = 'black';
        });

        row.appendChild(column);
    }
    grid.appendChild(row);
};

    