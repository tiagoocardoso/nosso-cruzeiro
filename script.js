const dataCruzeiro = new Date("2025-11-29T10:00:00").getTime();

function atualizarBloco(id, novoValor) {
  const bloco = document.getElementById(id);
  if (bloco.textContent != novoValor) {
    const pai = bloco.parentElement;
    pai.classList.remove("trocar");
    void pai.offsetWidth; // força reflow
    bloco.textContent = novoValor;
    pai.classList.add("trocar");
  }
}

function atualizarContagem() {
  const agora = new Date().getTime();
  const diferenca = dataCruzeiro - agora;

  if (diferenca <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>O cruzeiro começou!</h2>";
    clearInterval(intervalo);
    return;
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  atualizarBloco("dias", dias);
  atualizarBloco("horas", horas);
  atualizarBloco("minutos", minutos);
  atualizarBloco("segundos", segundos);
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();

