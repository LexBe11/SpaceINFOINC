function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the mathematical expression
        const result = eval(display.value);
        // Display the result
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Handle the parentheses closing for functions
document.getElementById('display').addEventListener('input', function() {
    const value = this.value;
    if (value.includes('(') && !value.includes(')')) {
        this.value += ')';
    }
});
