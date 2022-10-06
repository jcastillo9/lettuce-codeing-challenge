const reservationForm = document.querySelector(".reserve")
const reserveContainer = document.querySelector('.reserve-form')
const customerForm = document.querySelector(".customer-info")

reservationForm.addEventListener('submit', customerInfo)
customerForm.addEventListener('submit', confirmReservation)

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


