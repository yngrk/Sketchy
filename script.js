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
addHoverEffect();

// add eventListener, so that grid changes color on Mouseover
// make it a function so it can be called when resolution is updated
function addHoverEffect() {
    const boxes = document.querySelectorAll('.grid-item');
    boxes.forEach(box => box.addEventListener('mouseenter', function(event) {
        event.target.style['background-color'] = 'white';
    }));
}

// add function to remove existing grid
function clear() {
    const gridItems = document.querySelectorAll('.grid-item');
    const gridContainer = document.querySelector('.grid-container');
    gridItems.forEach(grid => grid.remove());
    gridContainer.remove();
}

// add eventListener to Resolution-Button to change the resolution of the canvas
const resButton = document.querySelector('.res');
resButton.addEventListener('click', function(event) {
    clear();
    let gridSize = prompt('Enter Resolution (max: 10000)');
    if (gridSize > 10000) {
        gridSize = 10000;
    }
    createGrid(parseInt(gridSize));
    addHoverEffect();
});