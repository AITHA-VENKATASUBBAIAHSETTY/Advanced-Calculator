let displayValue = "0";
let memory = [];
let history = [];

// Basic Functions
function input(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        history.push(displayValue);
        updateHistory();
    } catch (e) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").innerText = displayValue;
}

// Scientific Functions
function calculateSin() {
    displayValue = Math.sin(parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateCos() {
    displayValue = Math.cos(parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateTan() {
    displayValue = Math.tan(parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateLog() {
    displayValue = Math.log(parseFloat(displayValue)).toString();
    updateDisplay();
}

function calculateExp() {
    displayValue = Math.exp(parseFloat(displayValue)).toString();
    updateDisplay();
}

// Unit Conversion
function convertUnit() {
    const unitType = document.getElementById("unit-type").value;
    const inputValue = parseFloat(document.getElementById("unit-input").value);
    let result = "";

    if (unitType === "length") {
        result = (inputValue * 0.621371).toFixed(2) + " miles"; // Kilometers to miles conversion
    } else if (unitType === "temperature") {
        result = ((inputValue * 9/5) + 32).toFixed(2) + " °F"; // Celsius to Fahrenheit conversion
    }

    document.getElementById("conversion-result").innerText = result;
}

// Graph Plotting
function plotGraph() {
    const func = document.getElementById("function-input").value;
    const container = document.getElementById("graph-container");
    container.innerHTML = ""; // Clear previous graph

    // Plot graph using Plotly.js or D3.js
    let trace = {
        x: Array.from({ length: 100 }, (_, i) => i - 50),
        y: Array.from({ length: 100 }, (_, i) => eval(func.replace('x', i - 50))),
        mode: "lines",
        type: "scatter"
    };

    Plotly.newPlot(container, [trace]);
}

// Memory & History
function updateHistory() {
    const historyList = document.getElementById("history-list");
    const historyItem = document.createElement("li");
    historyItem.innerText = displayValue;
    historyList.appendChild(historyItem);
}

function clearHistory() {
    history = [];
    document.getElementById("history-list").innerHTML = "";
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
