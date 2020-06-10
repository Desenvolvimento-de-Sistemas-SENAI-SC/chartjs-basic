/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Exemplo básico de gráfico de setores/pizza usando a biblioteca Chart.js
 */

var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                45,
                90,
                63,
                124,
            ],
            backgroundColor: [
                "#FF0000",
                "#FFFF00",
                "#00FF00",
                "#0000FF",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Vermelho',
            'Amarelo',
            'Verde',
            'Azul'
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myPie = new Chart(ctx, config);
};