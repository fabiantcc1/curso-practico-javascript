const salariosLista = document.getElementById("salarios");
const medianaParrafo = document.querySelector(".mediana");

// Helpers -> Cosas que no hacen parte de la lógica del programa pero que utilizamos.

const salariosCol = colombia.map(function (persona) {
    return persona.salary;
});

const salariosColSorted = salariosCol.sort(function (salarioA, salarioB) {
    return salarioA - salarioB;
});

function esPar(numero) {
    return numero % 2 === 0;
}

function calcularMedia(lista) {
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        mediana = calcularMedia([personaMitad1, personaMitad2]);
    } else {
        mediana = lista[mitad];
    }

    return mediana;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Mediana TOP 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

// el método splice recibe dos parametros (el inicio del corte, llas posiciones a retirar)
const salariosTop10Col = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosTop10Col);

console.log({
    medianaGeneralCol,
    salariosTop10Col,
    medianaTop10Col
});
