// Controle do Modal
function toggleModal() {
    const modal = document.getElementById('modalContato');
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
}

// Formulário de contato
const formContato = document.getElementById('formContato');
if (formContato) {
  formContato.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso via Tailwind!');
    this.reset();
  });
}

// Botão do Modal
const btnModalEnviar = document.getElementById('btnModalEnviar');
if (btnModalEnviar) {
  btnModalEnviar.addEventListener('click', function () {
    const nome = document.getElementById('modalNome').value.trim();
    if (!nome) {
      alert('Preencha os campos!');
      return;
    }
    alert('Obrigado, ' + nome + '! Entraremos em contato.');
    toggleModal();
  });
}