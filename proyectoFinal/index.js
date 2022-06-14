/* function validarInputs() {

    const textErrorMontoMensual = document.querySelector('.input-monto-mensual');
    const textErrorEdadRetiro = document.querySelector('.input-edad-retiro');
    const textErrorEdadActual = document.querySelector('.input-edad-actual');
    const textErrorEdadExpectativa = document.querySelector('.input-edad-expectativa');

    if (inputMontoMensual.length == 0 || /^\s+$/.test(inputMontoMensual)) {
        textErrorMontoMensual.classList.remove('error-input-oculto');
        textErrorMontoMensual.classList.add('error-input');

        return false;
    }
    else {
        textErrorMontoMensual.classList.remove('error-input');
        textErrorMontoMensual.classList.add('error-input-oculto');

        return true;
    }
} */

// Ingreso anual deseado para el retiro calculado apartir del monto mensual deseado para vivir después del retiro
function ingresoAnualDeseado(montoMensual){
    const montoMensualNecesario = montoMensual * 12;
    
    return montoMensualNecesario;
}

function tiemposParaRetiro(edadActual, edadRetiro, edadExpectativa){
    const tiempo ={
        trabajo: edadRetiro - edadActual,
        retiro: edadExpectativa - edadRetiro
    }

    return tiempo;
}

function calcularMontosParaRetiro(){
    //Obtenemos los datos de los inputs de retiro
    const inputMontoMensual = document.getElementById('inputMontoMensual').value;
    const inputEdadRetiro = document.getElementById('inputEdadRetiro').value;
    const inputEdadActual = document.getElementById('inputEdadActual').value;
    const inputEdadExpectativa = document.getElementById('inputEdadExpectativa').value;

    //Outputs de los resultado
    const montoTotal = document.getElementById('montoTotal');
    const montoAnual = document.getElementById('montoAnual');
    const montoMensual = document.getElementById('montoMensual');
    const montoQuincenal = document.getElementById('montoQuincenal');
    const montoSemanal = document.getElementById('montoSemanal');

    const tiempos = tiemposParaRetiro(inputEdadActual, inputEdadRetiro, inputEdadExpectativa);
    
    const ingresoTotalParaRetiro = ingresoAnualDeseado(inputMontoMensual) * tiempos.retiro;

    const ingresoAnualParaRetiro = ingresoTotalParaRetiro / tiempos.trabajo;

    const montos = {
        total: Math.ceil(ingresoTotalParaRetiro),
        anual: Math.ceil(ingresoAnualParaRetiro),
        mensual: Math.ceil(ingresoAnualParaRetiro / 12),
        quincenal: Math.ceil(ingresoAnualParaRetiro / 24),
        semanal: Math.ceil(ingresoAnualParaRetiro / 48)
    }
    
    montoAnual.innerHTML = "$" + montos.anual;
    montoTotal.innerHTML = "$" + montos.total;
    montoMensual.innerHTML = "$" + montos.mensual;
    montoQuincenal.innerHTML = "$" + montos.quincenal;
    montoSemanal.innerHTML = "$" + montos.semanal;
}