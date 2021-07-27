/**
 * Implementación de funciones para validar datos y obtener fecha actual
 * @author The Bubble
 * @version 3.0
 */
document.addEventListener('DOMContentLoaded', function () {
    // Obtener fecha actual
    let date = new Date();
    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let anio = date.getFullYear();
    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    let fecha = document.getElementById('fecha');
    fecha.innerHTML = dia + '/' + mes + '/' + anio;
    // Campos obligatorios y validaciones
    let monto = document.getElementById('monto');
    let boton = document.getElementById('btn_pagar');
    let rutCliente = document.getElementById('rut');
    let seleccionMes = document.getElementById('mes');
    let seleccionAnio = document.getElementById('anio');

    boton.addEventListener('click', function (event) {
        if (monto.value === '') {
            monto.style.background = "lightgray";
            monto.style.border = "1px solid red";
        } else if (monto.value < 1) {
            alert('Ingresa un monto mayor a cero');
        } else if (monto.value > 99999999) {
            alert('Ingresa un monto menor a 99.999.999');
        } else if (seleccionMes.value === 'seleccion-mes') {
            seleccionMes.style.background = "lightgray";
            seleccionMes.style.border = "1px solid red";
            alert('Debes seleccionar un mes válido');
            event.preventDefault();
        } else if (seleccionAnio.value === 'seleccion-anio') {
            seleccionAnio.style.background = "lightgray";
            seleccionAnio.style.border = "1px solid red";
            alert('Debes seleccionar un año válido');
            event.preventDefault();
        } else if (rutCliente.value === '') {
            rutCliente.style.background = "lightgray";
            rutCliente.style.border = "1px solid red";
        } else {
            alert('El pago ha sido ingresado correctamente')
        }
    })
})
