function mostrarMensagem(numeroImagem) {
    var mensagens = [
        'Localização:23°33S 46°38W',
        'Localização:24°22S latitude-Longitude:128°19W ',
        'Localização:Latitude:30°N-Longitude:150°W',
        'Localização:12°06S de latitude-Longitude:96°53E',
        'Localização:21°18N de latitude-Longitude:157°51W'
    ];

    var mensagensSuperiores = [
        ['Chumbo', 'Hidrocarbonetos', 'DBO', 'Cádmio'],
        ['Chumbo', 'Hidrocarbonetos', 'DBO', 'Cádmio'],
        ['Chumbo', 'Hidrocarbonetos', 'DBO', 'Cádmio'],
        ['Chumbo', 'Hidrocarbonetos', 'DBO', 'Cádmio'],
        ['Chumbo', 'Hidrocarbonetos', 'DBO', 'Cádmio']
    ];

    var mensagensInferiores = [
        ['0,03 mg/L', '0,1 mg/L', '2 mg/L', '0,001 mg/L'],
        ['0,01 mg/L', '0,001 mg/L', '1 mg/L', '0,002 mg/L'],
        ['0,02 mg/L', '0,02 mg/L', '1,5 mg/L', '0,004 mg/L'],
        ['0,03 mg/L', '0,08 mg/L', '1,6 mg/L', '0,008 mg/L'],
        ['0,05 mg/L', '0,1 mg/L', '3 mg/L', '0,01 mg/L']
    ];

    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = mensagens[numeroImagem - 1];
    mensagem.style.color = 'white'; // Alteração da cor para branco
    document.getElementById('mensagem-container').style.display = 'block';

    var mensagemSuperior1 = document.getElementById('mensagem-superior1');
    var mensagemSuperior2 = document.getElementById('mensagem-superior2');
    var mensagemSuperior3 = document.getElementById('mensagem-superior3');
    var mensagemSuperior4 = document.getElementById('mensagem-superior4');
    var mensagemInferior1 = document.getElementById('mensagem-inferior1');
    var mensagemInferior2 = document.getElementById('mensagem-inferior2');
    var mensagemInferior3 = document.getElementById('mensagem-inferior3');
    var mensagemInferior4 = document.getElementById('mensagem-inferior4');



    // Defina o conteúdo e exiba as caixas de texto conforme necessário
    mensagemSuperior1.textContent = mensagensSuperiores[numeroImagem - 1][0];
    mensagemSuperior1.style.color = 'white';
    mensagemSuperior1.style.display = 'block';

    mensagemSuperior2.textContent = mensagensSuperiores[numeroImagem - 1][1];
    mensagemSuperior2.style.color = 'white';
    mensagemSuperior2.style.display = 'block';

    mensagemSuperior3.textContent = mensagensSuperiores[numeroImagem - 1][2];
    mensagemSuperior3.style.color = 'white';
    mensagemSuperior3.style.display = 'block';

    mensagemSuperior4.textContent = mensagensSuperiores[numeroImagem - 1][3];
    mensagemSuperior4.style.color = 'white';
    mensagemSuperior4.style.display = 'block';

    mensagemInferior1.textContent = mensagensInferiores[numeroImagem - 1][0];
    mensagemInferior1.style.color = 'white';
    mensagemInferior1.style.display = 'block';

    mensagemInferior2.textContent = mensagensInferiores[numeroImagem - 1][1];
    mensagemInferior2.style.color = 'white';
    mensagemInferior2.style.display = 'block';

    mensagemInferior3.textContent = mensagensInferiores[numeroImagem - 1][2];
    mensagemInferior3.style.color = 'white';
    mensagemInferior3.style.display = 'block';

    mensagemInferior4.textContent = mensagensInferiores[numeroImagem - 1][3];
    mensagemInferior4.style.color = 'white';
    mensagemInferior4.style.display = 'block';

    document.getElementById('mensagem-superior-inferior-container').style.display = 'flex';

    if (numeroImagem === 5) {
        document.getElementById('imagem-inferior-container').style.display = 'block';
    } else {
        document.getElementById('imagem-inferior-container').style.display = 'none';
    }
}
