const gridContainer = document.querySelector('#gridContainer');
const sizeSlider = document.querySelector('#gridSize');
const colorChoice = document.querySelector('#colorChoice');
const blackBtn = document.querySelector('#blackBtn');
const randomBtn = document.querySelector('#randomBtn');
const resetBtn = document.querySelector('#reset');
const redBtn = document.querySelector('#randRed');
const blueBtn = document.querySelector('#randBlue');
const borderBtn = document.querySelector('#borderBtn');


//Slider for Grid Size// 
sizeSlider.addEventListener('change', gridGenerator(sizeSlider.value));
sizeSlider.addEventListener('change', clearGrid);

// Colour Selector // 
colorChoice.addEventListener('change', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `${colorChoice.value}`;
        })
    }
});

// Black Button // 
blackBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }
});

// Random Colour Button // 
randomBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
});

//Random Red Btn //
redBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${0}, ${0})`;
        })
    }
});

//Random Blue Btn //
blueBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.addEventListener('mouseover', () => {
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${5}, ${10}, ${b})`;
        })
    }
});

// Button to add/remove grid border // 
borderBtn.addEventListener('click', () => {
    let divs = document.querySelectorAll('div.newDiv');
    for (let div of divs) {
        div.classList.toggle('newDivStyle');
    }
});

// Reset button //
resetBtn.addEventListener('click', clearGrid);

// Clear Grid function // 
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridGenerator(sizeSlider.value);
}

// New Grid function // 
function gridGenerator(num) {
    let gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        let newSquare = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        gridContainer.appendChild(newSquare);
        newSquare.classList.add('newDivStyle');
        newSquare.classList.add('newDiv');
    }
};