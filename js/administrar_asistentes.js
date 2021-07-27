$(document).ready(function () {
    $('#formulario').validate({
        rules: {
            id_asistente: {
                required: true,
                range: [1, 9999]
            },
            nombre: {
                required: true,
                minlength: 1,
                maxlength: 99
            },
            edad: {
                required: true,
                range: [1, 149]
            },
            correo: {
                required: true
            },
            telefono: {
                required: true,
                maxlength: 11,
                minlength: 11

            },
            capacitaciones: {
                required: true
            }
        }
    });
    $('#tabla').DataTable({
        language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
        },
    });
});