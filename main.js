// Array Visualizer

// HTML Variables
let containerEl = document.getElementById("container");


// Global Variable
let myData = [];
for(let n = 1; n <= 50; n++){
    
}
console.log(myData);

// Display Data
drawArray();


function drawArray(){
    let outputStr = ""
    for(let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height:${myData[i]}px"></div>`
    }
    containerEl.innerHTML = outputStr;
}

// Key event stuff

document.addEventListener("keydown", keydownHandler)

function keydownHandler(event){
    // Modify the array........
    if(event.keyCode === 38){
        // Up arrow - add 600 to index 0
        myData.splice(0, 0, Math.random()* 600);
    } else if (event.keyCode === 40){
        // Down Arrow - Remove element from middle
        myData.splice(0, 1);
    }

    //   if(event.keyCode === 38){
    //     // Up arrow - push value to end of array
    //     myData.push(Math.random()* 600);
    // } else if (event.keyCode === 40){
    //     // Down Arrow - Remove value from the end of array
    //    let poppedValue = myData.pop()
    //    console.log(poppedValue);
    // }

    // Redraw Array
    drawArray();
}