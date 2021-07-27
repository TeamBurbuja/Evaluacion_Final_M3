/**
 * Implementación de Validate plugin para validar formulario
 * @author The Bubble
 * @version 3.0
 */
$(document).ready(function () {
    $('#formulario').validate({
        rules: {
            rut: {
                required: true,
                maxlength: 10
            },
            razonsocial: {
                required: true,
                minlength: 5
            },
            direccion: {
                required: true,
                maxlength: 20
            },
            comuna: {
                required: true,
                minlength: 5
            },
            cantidadempleados: {
                required: true,
                range: [1, 1000]
            },
            telefono: {
                required: true,
                minlength: 11
            }
        }
    });
});