function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Prevent multiple operators or incorrect syntax
    if (value === '.' && display.value.endsWith('.')) return;
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace 'Math.PI' and 'Math.E' with their respective values
        let expression = display.value
            .replace(/Math\.PI/g, Math.PI)
            .replace(/Math\.E/g, Math.E);
        // Evaluate the mathematical expression
        const result = eval(expression);
        // Display the result
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
