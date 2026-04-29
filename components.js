async function loadComponent(selector, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

loadComponent('nav', '/components/nav.html');
loadComponent('footer', '/components/footer.html');

async function loadComponent(selector, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

async function initNav() {
  await loadComponent('nav', '/components/nav.html');
  
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
}

initNav();
loadComponent('footer', '/components/footer.html');