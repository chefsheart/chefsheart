//mobile menu

// Mobile Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-links');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
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
