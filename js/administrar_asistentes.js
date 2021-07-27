/**
 * Implementación de plugin validate y DataTable
 * @author The Bubble
 * @version 3.0
 */
$(document).ready(function () {
    // Validate Plugin
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
    // DataTable Plugin
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
    // Inserción de nueva fila en la tabla
    $('#formulario').submit(function (e) {
        e.preventDefault();
        // Declaración de variables
        let idAsistente = $('#id_asistente').val();
        let nombreCompleto = $('#nombre').val();
        let edad = $('#edad').val();
        let correoAsistente = $('#correo').val();
        let telefonoAsistente = $('#telefono').val();
        let capacitaciones = $('#capacitaciones').val();
        let idS = document.querySelectorAll('tbody th')
        let opcion = false;
        // Ciclo para validar valor de ID duplicado
        for (let index = 0; index < idS.length; index++) {
            if (idAsistente === '' || idAsistente < 1) {
                console.log('Sin valor');
                return;
            } else if (idAsistente == idS[index].innerHTML) {
                alert('No puedes tener un ID duplicado, ingresa un valor correcto');
                opcion = true;
                return;
            }
        }
        // Inserción de nueva fila en tabla de asistentes
        if (opcion == false) {
            $('#tabla tbody').append(`
                <tr>
                    <th scope="row">${idAsistente}</th>
                    <td>${correoAsistente}</td>
                    <td>${telefonoAsistente}</td>
                    <td><i class="fas fa-trash-alt"></i></td>
                </tr>
            `)
        }
    });
});