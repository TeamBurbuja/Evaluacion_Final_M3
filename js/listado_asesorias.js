/**
 * Implementación de métodos para cambiar estilo css del elemento table
 * @author The Bubble
 * @version 3.0
 */
$(document).ready(function () {
    $('#btn-1').click(function () {
        $('#tabla-asesorias th').css('background','red');
        $('#tabla-asesorias').css('border','4px solid red');
    })
    $('#btn-2').click(function () {
        $('#tabla-asesorias th').css('background','purple');
        $('#tabla-asesorias').css('border','4px solid purple');
    })
    $('#btn-3').click(function () {
        $('#tabla-asesorias th').css('background','goldenrod');
        $('#tabla-asesorias').css('border','4px solid goldenrod');
    })
});