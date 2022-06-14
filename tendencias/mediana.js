const listaUduario = [-695, 321, 596, 100, 200, 300, 500];

function ordenarLista(listaDesordenada) {
    listaDesordenada.sort(function (a, b)  {
        return a - b;
    })
    return listaDesordenada;
}

const lista = ordenarLista(listaUduario)

const mitadLista = Math.floor(lista.length / 2);

function calcularMedia(lista) {
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    })

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(largoLista) {
    return largoLista % 2 === 0 ? true : false;
}

let mediana;

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];

    const mediaDeLaMitad = calcularMedia([elemento1, elemento2]);
    
    mediana = mediaDeLaMitad;
}
else {
    mediana = lista[mitadLista];
}