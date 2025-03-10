// et all rate buttons and modals
const rateButtons = document.querySelectorAll('[id^="rate-"]');
const modals = document.querySelectorAll('[id^="modal-"]');
const closeButtons = document.querySelectorAll('[id^="close-"]');

// function to show modal when rate button is clicked
rateButtons.forEach(button => {
    button.addEventListener('click', function(){
        const eventId = button.id.split('-')[1];
        const modalId = `modal-${eventId}`;
        document.getElementById(modalId).classList.remove('hidden');
    });
});

// function to close modal when close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', function(){
        const eventId = button.id.split('-')[1];
        const modalId = `modal-${eventId}`;
        document.getElementById(modalId).classList.add('hidden');
    });
});

// automatically show modal for unrated events 
modals.forEach(modal => {
    if (!modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
    }
});