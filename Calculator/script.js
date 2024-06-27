document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';
    let operator = null;
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            if (button.classList.contains('number')) {
                handleNumber(value);
            } else if (button.classList.contains('operator')) {
                handleOperator(value);
            } else if (button.classList.contains('equal')) {
                calculate();
            } else if (button.classList.contains('clear')) {
                clearAll();
            } else if (button.classList.contains('delete')) {
                deleteLast();
            }
            updateOutput();
        });
    });

    function handleNumber(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            if (currentInput.includes('.') && value === '.') return;
            currentInput += value;
        }
    }

    function handleOperator(value) {
        if (currentInput === '' && value === '-') {
            currentInput = '-';
            return;
        }
        if (currentInput === '') return;
        if (previousInput !== '') {
            calculate();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            case '%':
                result = prev * (current / 100);
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = '';
    }

    function clearAll() {
        currentInput = '0';
        previousInput = '';
        operator = null;
    }

    function deleteLast() {
        currentInput = currentInput.slice(0, -1) || '0';
    }

    function updateOutput() {
        output.innerText = `${previousInput} ${operator || ''} ${currentInput}`;
    }
});
