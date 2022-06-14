const lista = [1, 2, 3, 42, 8, 2, 2, 2, 1];

function calcularModa(lista) {
    const listaCount = {};
    
    lista.map(function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    });

    // Con la funcion Object.entries() convertimos un objeto en un array
    const listaArray = Object.entries(listaCount).sort(function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    });
    
    const moda = listaArray[listaArray.length - 1];

    return "la moda es " + moda[0];
}

