/****************** create variables ******************/
let modelName = "XYZ";
let duration = 1;

/****************** helper function ******************/
function recalculate() {
    let costLabel = document.getElementById("calculated-cost");

    if (modelName === "XYZ") {
        costLabel.innerHTML = duration * 100;
    } else if (modelName === "CPRG") {
        costLabel.innerHTML = duration * 213;
    }
}

/****************** model button logic ******************/
let modelButton = document.getElementById("model-button");
console.log(modelButton);

function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
    }
    modelText.innerHTML = "Model " + modelName;
    recalculate();
}
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/
let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    duration = prompt("enter new duration:");

    durationText.innerHTML = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
