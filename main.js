//mobile menu

// Mobile Navbar Toggle


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
