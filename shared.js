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
modalNoButton.addEventListener('click', closeModal);
modalYesButton.addEventListener('click', closeModal);

// Actions
function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};

function closeModal(e) {
  // Temp
  e.preventDefault();

  backdrop.style.display = 'none';
  modal.style.display = 'none';
}