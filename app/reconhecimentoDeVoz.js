const elementoChute = document.getElementById("chute");
const SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    console.log(e.results);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box"> ${chute}</span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
