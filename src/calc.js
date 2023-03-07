let endpointSuma = '/suma/';
let endpointResta = '/resta/';
let endpointMultiplicacio = '/multiplicacio/';
let endpointDisio = '/divisio/';

function enviaParametres() {
    let valors = agafaValors();
    let opcio = agafaOpcio();
    let resultOutput = agafaResultat();

    fetch(`/api${eval(opcio.toLowerCase() + 'endpoint')}${valors[0]}/${valors[1]}`)
        .then(response => response.json())
        .then(data => {
        resultOutput = `${data.operador}: ${data.resultat}`;
        })
    .catch(error => {
        resultOutput = 'S\'ha produït un error a l\'hora de connectar amb el servidor.';
    });
}

function agafaValors() {
    let coleccioOperands = document.getElementsByClassName('inputNumber');
    let firstOperand = coleccioOperands[0].value;
    let secondOperand = coleccioOperands[1].value;
    return [firstOperand, secondOperand];
}

function agafaOpcio() {
    return document.getElementsByClassName('calcOption')[0].value;
}

function agafaResultat() {
    return document.getElementsByClassName('resultContainer')[0].textContent;
}