// Calcula el descuento sobre el porcentaje
function calcularDescuento(precio, descuento) {
    const porcetajeDescontado = 100 - descuento;
    const precioConDescuento = (precio * porcetajeDescontado) / 100;
    return precioConDescuento;
}

function generarDescuento() {
    const resultadoPrecio = document.getElementById('resultadoPrecio');
    const inputPrecio = document.getElementById('inputPrecio');
    const inputDescuento = document.getElementById('inputDescuento');
    const valuePrecio = inputPrecio.value;
    const valueDescuento = inputDescuento.value;
    
    const precioConDescuento = calcularDescuento(valuePrecio, valueDescuento);

    resultadoPrecio.innerText = `El precio con descuento es: $${precioConDescuento}`
}

// Podemos mandar a imprimir las variables como tipo objeto con {}
/* console.log({
    precioOriginal,
    descuento,
    porcetajeDescontado,
    precioConDescuento
}); */