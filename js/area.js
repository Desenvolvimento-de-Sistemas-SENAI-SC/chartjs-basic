/* Copyright (c) 2020 SENAI Chapecó/SC 
 * Código desenvolvido para aula da turma de Desenvolvimento de Sistemas
 * Professor: Rafael Hengen Ribeiro
 * 
 * Exemplo básico de gráfico de área empilhado usando a biblioteca Chart.js
 */

const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];

var config = {
    type: 'line',
    data: {
        labels: MESES,
        datasets: [{
            label: 'Área 1',
            borderColor: '#FF0000',
            backgroundColor: '#FF0000',
            data: [
                500,
                505,
                600,
                650
            ],
        }, {
            label: 'Área 2',
            borderColor: '#0000FF',
            backgroundColor: '#0000FF',
            data: [
                200,
                205,
                250,
                240
            ],
        }, {
            label: 'Área 3',
            borderColor: '#00FF00',
            backgroundColor: '#00FF00',
            data: [
                300,
                305,
                309,
                400
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Gráfico de área empilhado'
        },
        tooltips: {
            mode: 'index',
        },
        hover: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Mês'
                }
            }],
            yAxes: [{
                stacked: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Valor'
                }
            }]
        }
    }
};

window.onload = function() {
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
