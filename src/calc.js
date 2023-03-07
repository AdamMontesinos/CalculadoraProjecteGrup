// Define the URL endpoints for the calculator operations
const sumEndpoint = '/suma/';
const subtractEndpoint = '/resta/';
const multiplyEndpoint = '/multiplicacio/';
const divideEndpoint = '/divisio/';

// Define the HTML elements for the calculator inputs and outputs
const op1Input = document.getElementById('op1');
const op2Input = document.getElementById('op2');
const operatorSelect = document.getElementById('operator');
const resultOutput = document.getElementById('result');

// Define a function to make the API call to the Flask server
function calculate() {
  // Get the selected operator and operands
  const operator = operatorSelect.value;
  const op1 = op1Input.value;
  const op2 = op2Input.value;

  // Make the API call using the appropriate endpoint and parameters
  fetch(`/api${eval(operator.toLowerCase() + 'Endpoint')}${op1}/${op2}`)
    .then(response => response.json())
    .then(data => {
      // Update the result output with the calculated value
      resultOutput.innerHTML = `${data.operador}: ${data.resultat}`;
    })
    .catch(error => {
      console.error(error);
      resultOutput.innerHTML = 'Error haciendo el calculo.';
    });
}

// Add an event listener to the calculate button to trigger the calculation function
document.getElementById('calculateBtn').addEventListener('click', calculate);