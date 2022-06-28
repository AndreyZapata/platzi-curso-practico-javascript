// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
            
      }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calaculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


// Mediana General

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);


const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del Top 10%

const splicesStart = (salariosColSorted.length * 90) / 100;
const splicesCount = salariosColSorted.length - splicesStart;

const salariosColTop10 = salariosColSorted.splice(
    splicesStart,
    splicesCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});