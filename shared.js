// CHOOSE PLAN BUTTON MODAL
// Selectors
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const planButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const modalYesButton = document.querySelector('a.modal__action');


// Event Listenters
// Choose plan buttons
for (i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', openModal);
}
// Modal Buttons
if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}
if (modalYesButton) {
  modalYesButton.addEventListener('click', closeModal);
}
// Backdrop
backdrop.addEventListener('click', closeModal);

// Actions
function openModal() {
  // Using display inline styles
  // backdrop.style.display = 'block';
  // modal.style.display = 'block';

  // Overwriting className property - !It replaces all other classes already the element already has. Not recommended
  // backdrop.className = 'open';
  // modal.className = 'open';

  // Adding new classes
  backdrop.classList.add('open');
  modal.classList.add('open');
};

function closeModal(e) {
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
  mobileNav.classList.remove('open');
}



// CHOOSE PLAN BUTTON MODAL
// Selectors
const navToggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// Event Listeners
navToggleButton.addEventListener('click', toggleNavBarVisibility);

// Actions
function toggleNavBarVisibility() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
};