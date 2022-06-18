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

// default setup when entering site
createGrid(100*100);
addHoverEffectStatic();

// add function to remove existing grid
function clear() {
    const gridItems = document.querySelectorAll('.grid-item');
    const gridContainer = document.querySelector('.grid-container');
    gridItems.forEach(grid => grid.remove());
    gridContainer.remove();
}

// function to get Background-Color
function getBGColor(element) {
    const elem = document.querySelector(element);
    alert(elem.style.backgroundColor);
}

// add eventListener, so that grid changes color on Mouseover
// make it a function so it can be called when resolution is updated
function addHoverEffectStatic() {
    const boxes = document.querySelectorAll('.grid-item');

    boxes.forEach(box => box.addEventListener('mouseover', function(event) {
        event.target.style['background-color'] = 'white';
    }));
}

// add function to shift brightness on hover (black to white)
function addHoverEffectShift() {
    const boxes = document.querySelectorAll('.grid-item');

    boxes.forEach(box => box.addEventListener('mouseover', function(event) {
        let e = event.currentTarget;
        e.shiftAmount = (e.shiftAmount || 10)
        if (e.shiftAmount < 100) {
            e.shiftAmount += 10;
        }
        event.target.style['background-color'] = `rgb(${e.shiftAmount}%,${e.shiftAmount}%,${e.shiftAmount}%)`;
    }));
}

// Reset function
function reset() {
    clear();
    createGrid(parseInt(gridSize**2));
    addHoverEffectStatic();
}

let gridSize = 0;
// add eventListener to Resolution-Button to change the resolution of the canvas
const resButton = document.querySelector('.res');
resButton.addEventListener('click', function(event) {
    clear();
    gridSize = prompt('Enter Grid Size (max: 100)');
    if (gridSize > 100) {
        gridSize = 100;
    }
    createGrid(parseInt(gridSize**2));
    addHoverEffectStatic();
});

// eventListener for static button
const statButton = document.querySelector('.hover-static');
statButton.addEventListener('click', addHoverEffectStatic);

// eventListener for shift button
const shiftButton = document.querySelector('.hover-shift');
shiftButton.addEventListener('click', function(event) {
    addHoverEffectShift();
});

// eventListener for Reset Button
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);