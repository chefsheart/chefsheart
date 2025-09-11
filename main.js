//mobile menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});
    <!-- Mobile --> 
    const hamburger = document.getElementById('hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 
        mobileMenu.style.display === 'block' ? 'none' : 'block';
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
