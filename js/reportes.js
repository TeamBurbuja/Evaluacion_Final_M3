/**
 * Implementación de plugins y métodos para la generación de gráficos estadísticos
 * @author The Bubble
 * @version 3.0
 */
document.addEventListener('DOMContentLoaded', function () {
    // Creación de gráfico tipo barras
    let ctx1 = document.getElementById('barras').getContext('2d');
    let myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: [
                'Santiago',
                'La Florida',
                'Ñuñoa',
                'Estación Central',
                'Providencia',
                'Macul',
                'San Bernardo',
                'Las Condes',
                'Quilicura',
                'El Bosque'
            ],
            datasets: [{
                label: 'Clientes',
                data: [5, 22, 15, 9, 18, 14, 6, 15, 4, 7],
                backgroundColor: 'rgb(241, 92, 141)',
            }]
        }

    });
    // Creación de gráfico tipo líneas
    let ctx2 = document.getElementById('lineas').getContext('2d');
    let myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ],
            datasets: [
                {
                    label: 'Accidentes',
                    data: [5, 6, 15, 9, 18, 4, 3, 10, 7, 2, 11, 5],
                    backgroundColor: 'rgb(37, 226, 73)',
                    borderColor: 'rgb(117, 92, 241)'
                },
                {
                    label: 'Visitas',
                    data: [2, 3, 7, 4, 6, 10, 3, 5, 9, 17, 4, 9],
                    backgroundColor: 'rgb(41, 107, 240)',
                    borderColor: 'rgb(238, 214, 26)'
                }
            ]
        }

    });
    // Creación de gráfico tipo torta o pie
    let datos = {
        type: 'pie',
        data: {
            datasets: [{
                data: [5, 12, 8],
                backgroundColor: ['#33FA76', '#FA9925', '#D62920']
            }],
            labels: ['Cumple', 'Con Observaciones', 'No Cumple']
        }
    };
    let ctx3 = document.getElementById('torta').getContext('2d');
    window.torta = new Chart(ctx3, datos);

    // Función para cargar datos aleatorios en el gráfico cada 5 segundos
    setInterval(function () {
        datos.data.datasets.splice(0);
        let clientes = ['Habitat', 'Ripley', 'Lipigas', 'Preunic', 'Falabella', 'Castaño', 'La Polar', 'Cruz Verde', 'Casa Royal', 'Soprole'];
        let nombreCliente = document.getElementById('nombre-cliente');
        nombreCliente.innerHTML = clientes[clientesRandom(1, 10)];

        let nuevosDatos = {
            backgroundColor: ['#33FA76', '#FA9925', '#D62920'],
            data: [numeroRandom(), numeroRandom(), numeroRandom()]
        };

        datos.data.datasets.push(nuevosDatos);
        window.torta.update();
    }, 5000);

    // Función para generar número aleatorio para clientes
    function clientesRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // Función para generar número aleatorio de cifras
    function numeroRandom() {
        return Math.round(Math.random() * 100);
    }
});