const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const submitButton = document.querySelector('.popup__submit-button');
const elementIcon = document.querySelectorAll('.element__icon');

editButton.addEventListener('click', function(event) {
    event.preventDefault();
    popUp.classList.add(popupOpenedClass);
});

closeButton.addEventListener('click', function() {
    popUp.classList.remove(popupOpenedClass);

});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') {
        popUp.classList.remove(popupOpenedClass);
    }
});
submitButton.addEventListener('click', function() {
    popUp.classList.remove(popupOpenedClass);
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
elementIcon.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.target.classList.toggle('element__icon_active');
    });
});