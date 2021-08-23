
let grafico; //variável para poder manipular o gráfico


// função que recebe os números digitados pelo usuário e coloca no gráfico
function aperta_btn() {
  let dados_input_uti = document.getElementById("add_dados_uti").value;
  let dados_input_enf = document.getElementById("add_dados_enf").value;
  if (dados_input_uti > 0 && dados_input_enf > 0) {
    let dados = grafico.data;
    dados.datasets[0].data.push(dados_input_uti);
    dados.datasets[1].data.push(dados_input_enf);
    dados.labels.push(dados.labels.length + 1 + "/08");
    grafico.update();
  }
};


// o gráfico: o tipo dele é de barra, com duas informações (labels) informção da
// uti e da enfermaria.
$(document).ready(function () {
  let ctx = document.getElementById('grafico').getContext('2d');
  grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1/08', '2/08', '3/08', '4/08', '5/08', '6/08'],
      datasets: [{
        label: 'Percentual de Leitos de UTI',
        data: [80, 75, 85, 75, 84, 62],
        backgroundColor: [
          '#D9C3B0'
        ],
      },
      {
        label: 'Percentual de Leitos de enfermaria',
        data: [90, 68, 50, 45, 92, 40],
        backgroundColor: [
          '#A6756A'
        ],
      }],
    },
    options: {
      scales: {
        xAxis: {
          grid: {
            borderColor: "#FFFFFF",
            display: false
          }
        }
      },
      // evento de clique para ele saber qual barra a pessoa clicou para dar o resultado
      events: ['click'],
      onClick: (event, activeElements, chart) => {
        let index = activeElements[0].index;
        const dadosBarra = chart.data.datasets[0].data[index];
        const diaBarra = chart.data.labels[index];

        $("#informacoes");
          if (dadosBarra >= 80) {
            $("#informacoes p").html(`Em sua cidade, dia ${diaBarra}: </br> Leitos de uti ocupados - ${dadosBarra}% </br> Fase vermelha! </br> 
            Verifique na tabela ao lado os setores disponíveis nesta fase`).css({ backgroundColor: 'rgb(255, 215, 223)', boxShadow: '6px 7px 9px 1px rgba(0,0,0,0.03)', border: '1px solid rgba(243, 243, 243, 0.727)', borderRadius: '15px' });
          } else if (dadosBarra > 70 && dadosBarra < 80) {
            $("#informacoes").html(`Em sua cidade, dia ${diaBarra}: </br> Leitos de uti ocupados - ${dadosBarra}% </br> Fase laranja! </br> 
            Verifique na tabela ao lado os setores disponíveis nesta fase`).css({ backgroundColor: 'rgb(255, 231, 215)', boxShadow: '6px 7px 9px 1px rgba(0,0,0,0.03)', border: '1px solid rgba(243, 243, 243, 0.727)', borderRadius: '15px',
            textAlign: 'center', width: '100%', padding: '50px' });
          } else if (dadosBarra > 60 && dadosBarra < 70) {
            $("#informacoes").html(`Em sua cidade, dia ${diaBarra}: </br> Leitos de uti ocupados - ${dadosBarra}% </br> Fase amarela! </br> 
            Verifique na tabela ao lado os setores disponíveis nesta fase`).css({ backgroundColor: 'rgb(255, 249, 215)', boxShadow: '6px 7px 9px 1px rgba(0,0,0,0.03)', border: '1px solid rgba(243, 243, 243, 0.727)', borderRadius: '15px',
            textAlign: 'center', width: '100%', padding: '50px' });
          } else if (dadosBarra < 60) {
            $("#informacoes").html(`Em sua cidade, dia ${diaBarra}: </br> Leitos de uti ocupados - ${dadosBarra}% </br> Fase verde! </br> 
            Verifique na tabela ao lado os setores disponíveis nesta fase`).css({ backgroundColor: 'rgb(218, 255, 215)', boxShadow: '6px 7px 9px 1px rgba(0,0,0,0.03)', border: '1px solid rgba(243, 243, 243, 0.727)', borderRadius: '15px',
            textAlign: 'center', width: '100%', padding: '50px' });
          };
        ;
      }
    }
  });
});




