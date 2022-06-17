function createGrid(amount) {
    const container = document.createElement('div');
    container.classList.add('grid-container');

    for (let i = 0; i < amount; i++) {
        let elem = document.createElement('div');
        elem.classList.add('grid-item');
        container.appendChild(elem);
    }

    const columns = Math.floor(Math.sqrt(amount));
    container.style["grid-template-columns"] = `repeat(${columns}, 1fr)`;
    document.body.appendChild(container);
}

createGrid(8192);

const boxes = document.querySelectorAll('.grid-item');
boxes.forEach(box => box.addEventListener('mouseenter', function(event) {
    event.target.style['background-color'] = 'white';
}));