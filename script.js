// Malik är för smart no cap

const incrementBtn = document.getElementById('incrementBtn');
const counterDisplay = document.getElementById('counter');
const ipDisplay = document.getElementById('ipDisplay');


let counter = parseInt(localStorage.getItem('counter')) || 0;
counterDisplay.textContent = counter;


function incrementCounter() {
    counter++;
    counterDisplay.textContent = counter;
    localStorage.setItem('counter', counter); 
}


incrementBtn.addEventListener('click', incrementCounter);

fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
       
        ipDisplay.textContent = `IP: ${data.ip}`;
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
        ipDisplay.textContent = 'IP: Unavailable';
    });


    // References for calculator elements
const calculatorBtn = document.getElementById('calculatorBtn');
const calculatorModal = document.getElementById('calculatorModal');
const closeCalculator = document.getElementById('closeCalculator');
const calcDisplay = document.getElementById('calcDisplay');

// Show the calculator modal
calculatorBtn.addEventListener('click', () => {
    calculatorModal.classList.add('active');
});

// Hide the calculator modal
closeCalculator.addEventListener('click', () => {
    calculatorModal.classList.remove('active');
});

// Function to append values to the calculator display
function appendValue(value) {
    calcDisplay.value += value;
}

// Function to evaluate the expression
function calculate() {
    try {
        calcDisplay.value = eval(calcDisplay.value);
    } catch {
        calcDisplay.value = 'Error';
    }
}

// Function to clear the display
function clearDisplay() {
    calcDisplay.value = '';
}
