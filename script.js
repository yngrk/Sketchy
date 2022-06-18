function createGrid(amount) {
    // creates a grid layout of (amount) of divs
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

createGrid(128);

// add eventListener, so that grid changes color on Mouseover
const boxes = document.querySelectorAll('.grid-item');
boxes.forEach(box => box.addEventListener('mouseenter', function(event) {
    event.target.style['background-color'] = 'white';
}));

// add eventListener to Resolution-Button to change the resolution of the canvas