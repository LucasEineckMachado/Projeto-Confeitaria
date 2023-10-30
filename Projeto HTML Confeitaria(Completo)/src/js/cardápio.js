/*Seletor de Cores*/
const C1 = document.getElementById('C1');
const C2 = document.getElementById('C2');
const C3 = document.getElementById('C3');
const C4 = document.getElementById('C4');

const cores = {
    Padrão: "#FCD4D4",
    Aqua: "lightblue",
    Coral: "lightcoral",
    Salmão: "lightsalmon",
};

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

C1.addEventListener("click", function () {
    changeBackgroundColor(cores.Padrão);
    console.log("C1 clicado");
});

C2.addEventListener("click", function () {
    changeBackgroundColor(cores.Aqua);
    console.log("C1 clicado");
});

C3.addEventListener("click", function () {
    changeBackgroundColor(cores.Coral);
});

C4.addEventListener("click", function () {
    changeBackgroundColor(cores.Salmão);
});

const BotãoConfig = document.getElementById('BotãoConfig');
const Seletor = document.getElementById('Seletor');

let isVisible = false;

BotãoConfig.addEventListener('click', function() {
    isVisible = !isVisible; // Inverte o estado de visibilidade

    if (isVisible) {
        Seletor.style.display = 'block'; // Mostra o conteúdo
    } else {
        Seletor.style.display = 'none'; // Oculta o conteúdo
    }
});