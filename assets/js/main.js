document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('nav-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  // Substitua o valor abaixo pelo link real do checkout.
  const CHECKOUT_URL = '';
  const checkoutLinks = [
    document.getElementById('checkout-button'),
    ...document.querySelectorAll('.mobile-buy')
  ].filter(Boolean);

  checkoutLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (!CHECKOUT_URL) {
        event.preventDefault();
        document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
        console.info('Configure CHECKOUT_URL em assets/js/main.js para ativar a compra.');
        return;
      }
      link.href = CHECKOUT_URL;
    });
  });
});