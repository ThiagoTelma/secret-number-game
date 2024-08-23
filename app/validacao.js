function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.innerHTML = `
                <h1 class="game-over"> GAME OVER </h1>
                <h2> Aperte o botão para jogar novamente <i class="fa-solid fa-arrow-down"></i></h2>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente </button>
                `;
            document.body.style.backgroundColor = "Black";
        }
    
        elementoChute.innerHTML += "<div>Valor Inválido</div>";
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou! </h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente </button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
           O número secreto é menor <i class="fa-solid fa-arrow-down"></i>
        </div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>
            O número secreto é maior <i class="fa-solid fa-arrow-up"></i>
        </div>
        `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload();
    }
});
