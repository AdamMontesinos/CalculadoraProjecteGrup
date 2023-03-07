let endpointSuma = '/suma/';
let endpointResta = '/resta/';
let endpointMultiplicacio = '/multiplicacio/';
let endpointDisio = '/divisio/';

function enviaParametres() {
    let valors = agafaValors();
    let opcio = agafaOpcio();
    let resultOutput = agafaResultat();

    fetch(`/api${eval(opcio.toLowerCase() + 'endpoint')}${op1}/${op2}`)
        .then(response => response.json())
        .then(data => {
        resultOutput.innerHTML = `${data.operador}: ${data.resultat}`;
        })
        .catch(error => {
        console.error(error);
        resultOutput.innerHTML = 'Error haciendo el calculo.';
        });
}

function agafaValors() {
    let operandCollection = document.getElementsByClassName('inputNumber');
    let firstOperand = operandCollection[0].value;
    let secondOperand = operandCollection[1].value;
    return [firstOperand, secondOperand];
}

function agafaOpcio() {
    return document.getElementsByClassName('calcOption')[0].value;
}

function agafaResultat() {
    return document.getElementsByClassName('resultContainer')[0].textContent;
}