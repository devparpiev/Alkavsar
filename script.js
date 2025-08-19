let menuIcon = document.querySelector('#menu-icon');
let closeIcon = document.querySelector('#close-icon');
let navbar = document.querySelector('.navbar');

// Open sidebar
menuIcon.onclick = () => {
  navbar.classList.add('active');
};

// Close sidebar
closeIcon.onclick = () => {
  navbar.classList.remove('active');
};

// Auto close on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
};
