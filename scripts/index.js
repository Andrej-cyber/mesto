const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const submitButton = document.querySelector('.popup__submit-button');
const elementIcon = document.querySelectorAll('.element__icon');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');

function openPopup() {
    popUp.classList.add(popupOpenedClass);
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
};

function closePopup() {
    popUp.classList.remove(popupOpenedClass);
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup();
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);


elementIcon.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.target.classList.toggle('element__icon_active');
    });
});