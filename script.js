const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('is-open', !isExpanded);
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
  });
}
