const cupones = [
    {
        nombre: "siu",
        descuento: 10
    },
    {
        nombre: "w2m",
        descuento: 15
    },
    {
        nombre: "programacion",
        descuento: 20
    }
];

// Calcula el descuento sobre el porcentaje
function calcularDescuento(precio, descuento) {
    const porcetajeDescontado = 100 - descuento;
    const precioConDescuento = (precio * porcetajeDescontado) / 100;
    return precioConDescuento;
}

function generarDescuento() {
    const resultadoPrecio = document.getElementById('resultadoPrecio');
    const inputPrecio = document.getElementById('inputPrecio');
    const inputCupon = document.getElementById('inputCupon');
    const valuePrecio = inputPrecio.value;
    const valueCupon = inputCupon.value;
    
    // Verificar existencia de cupon    
    const userCupon = cupones.find(function (cupon) {
        return cupon.nombre === valueCupon;
    });
    
    console.log(userCupon);

    if (!userCupon) {
        alert(`El cupón ${valueCupon} no es valido`);
    }
    else {
        const descuento = userCupon.descuento;
        const precioConDescuento = calcularDescuento(valuePrecio, descuento);

        resultadoPrecio.innerText = `El precio con descuento es: $${precioConDescuento}`
    }
}