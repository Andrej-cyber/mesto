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

const submitButton = document.querySelector('.popup__submit-button');


submitButton.addEventListener('click', function() {
    popUp.classList.remove(popupOpenedClass);
    document.body.style.overflow = '';

});

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);