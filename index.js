const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';


editButton.addEventListener('click', function(event) {
    event.preventDefault();
    popUp.classList.add(popupOpenedClass);
    document.body.style.overflow = 'hidden';

});

closeButton.addEventListener('click', function() {
    popUp.classList.remove(popupOpenedClass);
    document.body.style.overflow = '';
});


document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        popUp.classList.remove(popupOpenedClass);
        document.body.style.overflow = '';
    }
});