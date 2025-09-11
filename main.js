//mobile menu

// MOBILE MENU TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburgerButton || !mobileMenu) return; // safety check

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
    

// counter
  const counter = document.querySelector('.count');
  const target = +counter.getAttribute('data-target');
  const speed = 150; // lower is faster

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target; // prevent overshoot
    }
  };

  window.addEventListener('load', updateCount);
