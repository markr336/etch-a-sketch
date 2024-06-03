// Global Variables: Global DOM elements
const grid = document.querySelector("#container");
const pixel = document.createElement("div");
const buttons = document.querySelector("#buttons");

// Grid Button
const gridNumberButton = document.createElement('button');
gridNumberButton.classList.add("grid");
gridNumberButton.textContent = "Number of Squares"
gridNumberButton.setAttribute('id', 'grid');
buttons.appendChild(gridNumberButton);
const input = document.querySelector(".grid")
input.addEventListener('click', function() {
// Display the prompt when the button is clicked
    x = prompt('Please enter some text:');
    clear(gridNumber);
    gridNumber = 0;
    generatPixels(x);
    gridNumber = x;
});

// Rainbow button
const randomColours = document.createElement('button')
randomColours.classList.add("rnd");
randomColours.textContent = "Rainbow";
buttons.appendChild(randomColours);
const rainbow = document.querySelector(".rnd");
rainbow.addEventListener('click', function() {
    clear(gridNumber);
    console.log(gridNumber);
    generatPixelsRNBW(gridNumber);

});

// Darkening Button
const darker = document.createElement('button')
darker.classList.add("drk");
darker.textContent = "Darkening";
buttons.appendChild(darker);
const opa = document.querySelector(".drk");
opa.addEventListener('click', function() {
    clear(gridNumber);
    console.log(gridNumber);
    darkeningEffect(gridNumber);

});

// Default grid number
let gridNumber = 16

generatPixels(gridNumber);

// Creates grid using the default number to create 16x16 grid
function generatPixels(gridNumber) {
    /* Grid size is 500px x 500px. As the border thickness is 1px, x will calculate
    the dimensions of each pixel.*/
    let x = (500/gridNumber) - 2;
    let numberOfPixels = gridNumber*gridNumber;

    // Creates each pixel inside the grid
    for (let i = 0; i < numberOfPixels; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute('id', i);
        pixel.classList.add("pixel");
        pixel.style.width = x +"px";
        pixel.style.height = x +"px";
        pixel.style.border = "solid black 1px"
        grid.appendChild(pixel);
    }

    // Active loop allows each pixel to be coloured in purple when mouse enters area
    for (let j = 0; j < numberOfPixels; j++) {
        const test = document.getElementById(j);
        test.addEventListener("mouseenter", (event) => {
          event.target.style.backgroundColor = "purple";
        });
    }
}

// Switches the colour to rainbow & keeps the current number of pixels
function generatPixelsRNBW(gridNumber) {
    let x = (500/gridNumber) - 2;
    let numberOfPixels = gridNumber*gridNumber;

    for (let i = 0; i < numberOfPixels; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute('id', i);
        pixel.classList.add("pixel");
        pixel.style.width = x +"px";
        pixel.style.height = x +"px";
        pixel.style.border = "solid black 1px"
        grid.appendChild(pixel);
    }

    // Loop for the rainbow
    for (let j = 0; j < numberOfPixels; j++) {
        const test = document.getElementById(j);
        test.addEventListener("mouseenter", (event) => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            // If statement used to colour pixels that are only white 
            let g = document.getElementById(j).style.backgroundColor;
            if (g == 0) {
                event.target.style.backgroundColor = "#" + randomColor;
            }
        });
    }
}

// Switches to darkening effect but keeps current pixels
function darkeningEffect() {
    let x = (500/gridNumber) - 2;
    let numberOfPixels = gridNumber*gridNumber;

    for (let i = 0; i < numberOfPixels; i++) {
        const pixel = document.createElement("div");
        pixel.setAttribute('id', i);
        pixel.classList.add("pixel");
        pixel.style.width = x +"px";
        pixel.style.height = x +"px";
        pixel.style.border = "solid black 1px"
        grid.appendChild(pixel);
    }

    /* The opacity variable is outside of the loop which allows the 
    darkeinig effect to occur. If the variable is insidee the loop, the pixel stores 
    opacity as 0 but if the mouse goes over that pixel then it darkens it
    (when if statment is not below)*/
    let opacity = 0;
    for (let j = 0; j < numberOfPixels; j++) {
        const darker = document.getElementById(j);
        darker.addEventListener("mouseenter", (event) => {
            let g = document.getElementById(j).style.opacity;
            // If statment prevents pixels being overwritten
            if (g == 0) {
                event.target.style.backgroundColor = "black";
                pixel.style.border = "solid black 1px"
                event.target.style.opacity = opacity + "";
                opacity = opacity + 0.1;
            }
        });
    }
}

// Clears all the pixels in the gird
function clear(gridNumber) {
    let numberOfPixels = gridNumber*gridNumber;
    for (let k = 0; k < numberOfPixels; k++) {
        let del = document.getElementById(k);
        grid.removeChild(del);
    }
}