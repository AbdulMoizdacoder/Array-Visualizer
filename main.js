// Array Visualizer

// HTML Variables
let containerEl = document.getElementById("container");


// Global Variable
let myData = [400, 500, 250, 550, 100, 300];

// Display Data
drawArray();


function drawArray(){
    let outputStr = ""
    for(let i = 0; i < myData.length; i++) {
        outputStr += `<div>${myData[i]}</div>`
    }
    containerEl.innerHTML = outputStr;
}