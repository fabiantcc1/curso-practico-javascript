// Código del cuadrado
const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
    return base + lado1 + lado2;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Código del triangulo Isósceles
function alturaIsosceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        const h = Math.pow(lado1, 2) - (Math.pow(base, 2) / 4);
        return Math.sqrt(h);
    }
    else {
        alert("El lado A y el lado B deben de medir lo mismo.")
    }
}

// Código del Circulo
const PI = Math.PI;

function diametroCirculo(radio){
    return radio + radio
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return Math.pow(radio, 2) * PI;
}

// Vamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = parseFloat(input.value);

    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro del cuadrado es: ${perimetro} cm`)
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("ladoCuadrado");
    const value = parseFloat(input.value);

    const perimetro = areaCuadrado(value);
    alert(`El área del cuadrado es: ${perimetro} cm^2`);
}

function calcularPerimetroTriangulo() {
    const inputLadoA = document.getElementById("ladoA");
    const inputLadoB = document.getElementById("ladoB");
    const inputBase = document.getElementById("base");
    const valueLadoA = parseFloat(inputLadoA.value);
    const valueLadoB = parseFloat(inputLadoB.value);
    const valueBase = parseFloat(inputBase.value);
    
    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    alert(`El perimetro del triangulo es: ${perimetro} cm`);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("base");
    const inputAltura = document.getElementById("altura");
    const valueBase = parseFloat(inputBase.value);
    const valueAltura = parseFloat(inputAltura.value);
    
    const area = areaTriangulo(valueBase, valueAltura);
    alert(`El area del triangulo es: ${area} cm^2`);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("radio");
    const value = parseFloat(radio.value);
    
    const area = areaCirculo(value);
    alert(`El area del triangulo es: ${area} cm`);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");
    const value = parseFloat(radio.value);
    
    const perimetro = diametroCirculo(value);
    alert(`El perimetro del triangulo es: ${perimetro} cm`);
}

function calcularAlturaIsosceles() {
    const inputA = document.getElementById("ladoIsoscelesA");
    const inputB = document.getElementById("ladoIsoscelesB");
    const inputBase = document.getElementById("baseIsosceles");
    const valueA = parseFloat(inputA.value);
    const valueB = parseFloat(inputB.value);
    const valueBase = parseFloat(inputBase.value);

    const h = alturaIsosceles(valueA, valueB, valueBase);
     alert(`La altura del triangulo isósceles es: ${h} cm`);
}