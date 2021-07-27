/**
 * Implementación de Validate plugin para validar formulario, datepicker y timepicker plugin
 * para validar y obtener fecha desde input tipo texto
 * @author The Bubble
 * @version 3.0
 */
$(document).ready(function () {
    $('#formulario').validate({
        rules: {
            id_accidente: {
                required: true,
                range: [1, 9999]
            },
            lugar: {
                required: true,
                minlength: 1,
                maxlength: 149
            },
            fecha: {
                required: true,
            },
            hora: {
                required: true,
            },
            origen: {
                required: true,
                maxlength: 100   
            },
            consecuencias: {
                required: true,
                maxlength: 100   
            },
            cliente: {
                required: true
            }
        }
    });
    $( "#fecha" ).datepicker({
        dateFormat: 'dd-mm-yy',
    });
    $('#hora').timepicker({
        timeFormat: 'HH:mm',
        interval: 10,
        startTime: '09:00',
        scrollbar: true
    });
});