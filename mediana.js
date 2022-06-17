function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;
    // for (let i=0; i < lista.length; i++ ) {
    //     sumaLista = sumaLista + lista[i];

    // }

    const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
            
      }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function esPar(numerito) {
    if (numerito % 2 === 0){
        return true;
    }
    else {
        return false;
    }

}


function calcularMediana(list){
    let sortedList = list.sort(function(a, b) {
        return a - b;
    })

    console.log(sortedList);

    const mitadLista = parseInt(sortedList.length / 2);

    let mediana;

    if (esPar(lista.length)){
        const elemento1 = sortedList[mitadLista -1 ];
        const elemento2 = sortedList[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
    
    } else {
        mediana = sortedList[mitadLista];
    
    }

    return mediana;
    

}