(function () {
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const form = document.querySelector('#contact-form');
  const sent = document.querySelector('#contact-sent');
  const sentName = document.querySelector('#contact-sent-name');
  const resetBtn = document.querySelector('#contact-reset');

  if (form && sent && resetBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameField = form.querySelector('input[name="name"]');
      sentName.textContent = (nameField && nameField.value.trim()) || 'cher client';
      form.hidden = true;
      sent.hidden = false;
    });

    resetBtn.addEventListener('click', () => {
      form.reset();
      sent.hidden = true;
      form.hidden = false;
    });
  }
})();
