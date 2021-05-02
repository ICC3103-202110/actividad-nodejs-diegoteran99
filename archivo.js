const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var fibonacci = function(numero) {
    if (numero===0) {
        return numero;
    } 
    if (numero===1) {
        return numero;
    } else {
        return (fibonacci(numero-1) + fibonacci(numero-2));
    } 

}
readline.question('Ingesa un numero: ', numero => {
        console.log('F('+ numero + ') = ' + fibonacci(numero));
        readline.close();
});

