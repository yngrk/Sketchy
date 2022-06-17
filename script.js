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

// change this part, so user can decide.
createGrid(10000);

// add eventListener, so that grid changes color on Mouseover
const boxes = document.querySelectorAll('.grid-item');
boxes.forEach(box => box.addEventListener('mouseenter', function(event) {
    event.target.style['background-color'] = 'white';
}));