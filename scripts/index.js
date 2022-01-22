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
// ------------------popupAdd-pic------------------------------
const addButton = document.querySelector('.profile__add-button');
const popUpAddPic = document.querySelector('.popup__add-pic');
const closePopupAddButton = document.querySelector('.popup__close-button-add-pic');
let pictureNameInput = document.querySelector('#input-pic-name');
let pictureLinkInput = document.querySelector('#input-pic-link');
let elementTitle = document.querySelectorAll('.element__title');
let elementImage = document.querySelectorAll('.element__image');
let formSubmitPictureElement = document.querySelector('.popup__add-pic-container');
const submitPictureButton = document.querySelector('.popup__submit-pic-button');
// --------------------------popup-cards--------------
const popupCards = document.querySelector('.popup__cards');
const popupCardsContainer = document.querySelector('.popup__cards-container');
const popupCardsCloseBtn = document.querySelector('.popup__close-cards-button');
let popupCardImg = document.querySelector('.popup__card-img');
let popupCardTitle = document.querySelector('.popup__card-title');
// -------------------------popup------------------------


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
// -------------------------popuAdd-pic----------------------
function openPopupAddPicture() {
    popUpAddPic.classList.add(popupOpenedClass);
    pictureNameInput.value = pictureNameInput.textContent;
    pictureLinkInput.value = pictureLinkInput.textContent;
};


function closePopupAddPicture() {
    popUpAddPic.classList.remove(popupOpenedClass);
};



function formSubmitPictureHandler(evt) {
    evt.preventDefault();
    pictureNameInput.textContent = elementTitle.value;
    pictureLinkInput.textContent = elementImage.value;
    closePopupAddPicture();
};
// ----------------------popup Image-----------------------------

function openPopupImage() {
    popupCards.classList.add(popupOpenedClass);

};

function closePopupImage() {
    popupCards.classList.remove(popupOpenedClass);
};

elementImage.forEach((item) => {
    item.addEventListener('click', openPopupImage);
});


popupCardsCloseBtn.addEventListener('click', closePopupImage);
// ----------------------EventListeners--------------------------

addButton.addEventListener('click', openPopupAddPicture);
closePopupAddButton.addEventListener('click', closePopupAddPicture);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
formSubmitPictureElement.addEventListener('submit', formSubmitPictureHandler);





// ------------------------LIke Icon------------------------
elementIcon.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.target.classList.toggle('element__icon_active');
    });
});
