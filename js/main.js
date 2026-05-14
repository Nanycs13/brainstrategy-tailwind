/* =============================================
   main.js – BrainStrategy
   ============================================= */

// ── Formulário de contato (seção #contato) ──────────────────
const formContato = document.getElementById('formContato');

if (formContato) {
  formContato.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      alert('Por favor, preencha corretamente os campos obrigatórios.');
      return;
    }

    alert('Mensagem enviada! Em breve entraremos em contato.');
    this.reset();
  });
}



// Menu mobile
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('mobileMenuIcon');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  menu.classList.toggle('hidden');
  if (icon) {
    icon.classList.toggle('bi-list', !isHidden);
    icon.classList.toggle('bi-x-lg', isHidden);
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('mobileMenuIcon');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
  if (icon) {
    icon.classList.add('bi-list');
    icon.classList.remove('bi-x-lg');
  }
}


