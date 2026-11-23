const buttons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-type]')];
buttons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  buttons.forEach(item => {
    const active = item === button;
    item.classList.toggle('selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => card.hidden = filter !== 'all' && card.dataset.type !== filter);
}));
