//>> Consigna: codifica al menos tres funciones cuyas instrucciones permitan resolver un problema particular, segmentado en tareas. La información a procesar debe ser ingresada por el usuario, y el resultado del procesamiento visualizado en una salida.
//>>Aspectos a incluir en el entregable:
//Archivo HTML y archivo JavaScript referenciados, que incluyan la definición y llamada de al menos tres funciones.

function saltarLinea() {
    document.write("<br>");
};

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
};

function accesoDenegado() {
    alert('ACCESO DENEGADO ⛔');
    window.location.reload();
};

function codigoCorrecto() {
    alert(usuario + ', el código es correcto ✅');
    imprimir('<img src="https://i.ytimg.com/vi/mo5vPg6Tbek/maxresdefault.jpg"<br>');
};

function resolverProblema(_pos) {
    alert(usuario + ', coloque la respuesta correcta para encontrar el código correspondiente a la ubicacion ' + _pos + '.');
};

function entregarCodigo(_num) {
    alert(usuario + ', el código encontrado es: ' + _num + '.');
};

function encontrarCodigo1() {
    resolverProblema(1);
    let resolverCodigo1 = (prompt(usuario + ', ingrese la suma de los dos primeros numeros primos de dos dígitos.'));
    switch(resolverCodigo1) {
        case'24':
            entregarCodigo('0');
            break;
        default:
            accesoDenegado();
            break;
    };
};

function encontrarCodigo2() {
    resolverProblema(2);
    let resolverCodigo2 = prompt(usuario + ', ingrese el año que el hombre llegó a la luna.');
    switch(resolverCodigo2) {
        case'1969':
            entregarCodigo('3');
            break;
        case'69':
            entregarCodigo('3');
            break;
        default:
            accesoDenegado();
            break;
    };
};

function encontrarCodigo3() {
    resolverProblema(3);
    let resolverCodigo3 = prompt(usuario + ', ingrese el nombre del filósofo autor de la "Alegoría de la caverna".');
    switch(resolverCodigo3) {
        case 'Platón':
            entregarCodigo('1');
            break;
        case 'platón':
            entregarCodigo('1');
            break;
        case 'Platon':
            entregarCodigo('1');
            break;
        case 'platon':
            entregarCodigo('1');
            break;        
        default: 
            accesoDenegado();
            break;
    };
};

function encontrarCodigo4() {
    resolverProblema(4);
    let resolverCodigo4 = prompt(usuario + ', ingrese el nombre del sexto elemento de la tabla periódica');
    switch(resolverCodigo4) {
        case 'Carbono':
            entregarCodigo('1');
            break;
        case 'carbono':
            entregarCodigo('1');
            break;
        default:
            accesoDenegado();
            break;
    };
};

function ingresarCodigos() {
    let codigoSecreto1 = prompt('Ingrese el primer dígito que le fue entregado.');
    let codigoSecreto2 = prompt('Ingrese el segundo dígito que le fue entregado.');
    let codigoSecreto3 = prompt('Ingrese el tercer dígito que le fue entregado.');
    let codigoSecreto4 = prompt('Ingrese el cuarto dígito que le fue entregado.');
    codigoSecreto = ((codigoSecreto1) + (codigoSecreto2) + (codigoSecreto3) + (codigoSecreto4));

    switch (codigoSecreto) {
        case '0311':
            codigoCorrecto();
            break;
        case '':
            accesoDenegado();
            break;
        default:
            alert(usuario + ', lo siento pero el código ingresado no es válido.');
            accesoDenegado();
            break;
        };
        
        imprimir('El código ingresado fue: <b>' + codigoSecreto + '</b>.');
        console.log('El código ingresado fue: ' + codigoSecreto + '.');
    
};

let usuario = prompt('Ingrese su nombre, por favor.');

let codigoSecreto = '';
let resolverCodigo1= '';
let resolverCodigo2= '';
let resolverCodigo3= '';
let resolverCodigo4= '';

if (usuario!='') {
    alert('¡Hola ' + usuario + '! 😃');
} else {
    accesoDenegado();
};

encontrarCodigo1();
encontrarCodigo2();
encontrarCodigo3();
encontrarCodigo4();
ingresarCodigos();

