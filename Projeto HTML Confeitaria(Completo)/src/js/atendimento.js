// Seleciona o formulário pelo ID
const form = document.getElementById('pedidoForm');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Seleciona o elemento de mensagem
    const mensagem = document.getElementById('mensagem');

    // Altera o conteúdo da mensagem de acordo com o nome inserido no formulário
    const nome = document.getElementById('nome').value;
    mensagem.textContent = `Obrigado, ${nome}! Seu pedido foi enviado.`;
});

// Obtém os botões e a seção
const Mostrar = document.getElementById('Mostrar');
const SeçãoPed = document.getElementById('Seção-Pedido');

// Adiciona um ouvinte de evento ao botão "Mostrar Seção"
Mostrar.addEventListener('click', function() {
  SeçãoPed.style.display = 'block'; // Torna a seção visível
});

