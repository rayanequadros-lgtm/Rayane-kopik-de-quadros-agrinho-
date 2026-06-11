function mostrarMensagem() {
    alert("O futuro sustentável começa com inovação, responsabilidade e compromisso com o campo!");
}

function animarNumero(id, valorFinal) {
    let numero = 0;

    const intervalo = setInterval(() => {
        numero += Math.ceil(valorFinal / 100);

        if (numero >= valorFinal) {
            numero = valorFinal;
            clearInterval(intervalo);
        }

        document.getElementById(id).textContent =
            numero.toLocaleString("pt-BR");
    }, 30);
}

window.onload = () => {
    animarNumero("num1", 50000);
    animarNumero("num2", 1200);
    animarNumero("num3", 850000);
};                                                                                                                                                                                                                             