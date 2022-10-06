const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".nav-menu")
const reservationForm = document.querySelector(".reserve")
const reserveContainer = document.querySelector('.reserve-form')
const customerForm = document.querySelector(".customer-info")

toggleButton.addEventListener('click', navMenu)
reservationForm.addEventListener('submit', customerInfo)
customerForm.addEventListener('submit', confirmReservation)


function navMenu() {
    navbarLinks.classList.toggle('active')
  }

function customerInfo(event) {
    event.preventDefault();

    reservationForm.style.display = "none";
    customerForm.style.display = "block";
}

function confirmReservation(event) {
    event.preventDefault();

    customerForm.style.display = "none"
    reserveContainer.innerHTML = "Success! Your reservation has been received!"
}