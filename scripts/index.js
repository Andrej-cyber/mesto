const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const submitButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
const addButton = document.querySelector('.profile__add-button');
const popUpAddPic = document.querySelector('.popup__add-pic');
const closePopupAddButton = document.querySelector('.popup__close-button-add-pic');
const submitPictureButton = document.querySelector('.popup__submit-pic-button');
const popupCards = document.querySelector('.popup__cards');
const popupCardsContainer = document.querySelector('.popup__cards-container');
const popupCardsCloseBtn = document.querySelector('.popup__close-cards-button');
let popupCardImg = document.querySelector('.popup__card-img');
let popupCardTitle = document.querySelector('.popup__card-title');
const elementContainer = document.querySelector('.elements__container');
const addElementForm = document.querySelector('[name="myname2"]');
const formSubmitPictureElement = document.querySelector('.popup__add-pic-container');
const pictureNameInput = document.querySelector('#input-pic-name');
const pictureLinkInput = document.querySelector('#input-pic-link');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.element');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

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

function openPopupAddPicture() {
    popUpAddPic.classList.add(popupOpenedClass);
    pictureNameInput.value = pictureNameInput.textContent;
    pictureLinkInput.value = pictureLinkInput.textContent;
};

function closePopupAddPicture() {
    popUpAddPic.classList.remove(popupOpenedClass);
};

function openPopupImage() {
    popupCards.classList.add(popupOpenedClass);
};
function closePopupImage() {
    popupCards.classList.remove(popupOpenedClass);
};

const getElement = (item) => {
    const element = elementsTemplate.cloneNode(true);
    const elementTitle = element.querySelectorAll('.element__title');
    const elementImage = element.querySelectorAll('.element__image');
    const elementLikeIcon = element.querySelector('.element__icon');
    const elementDeleteBtn = element.querySelector('.element__icon-bin');

    elementLikeIcon.addEventListener('click', handleLikeBtn);
    elementDeleteBtn.addEventListener('click', handleDeleteBtn);
    elementImage.forEach((item) => {
        item.addEventListener('click', openPopupImage);
    });

    elementTitle.textContent = item.name;
    elementImage.href = item.link;

    return element;

};

const renderElement = (item, wrap) => {
    const element = getElement(item)
    wrap.prepend(element)
}

const handleLikeBtn = (e) => {
    e.target.classList.toggle('element__icon_active');
}

const handleDeleteBtn = (e) => {
    e.target.closest('.element').remove();
}

const handleElementFormSubmit = (e) => {
    e.preventDefault();
    const element = {
        name: pictureNameInput.value,
        link: pictureLinkInput.value
    }

    renderElement(element, elementContainer);
    closePopupAddPicture();
}

initialCards.forEach(item => {
    renderElement(item, elementContainer);
});

popupCardsCloseBtn.addEventListener('click', closePopupImage);
addButton.addEventListener('click', openPopupAddPicture);
closePopupAddButton.addEventListener('click', closePopupAddPicture);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
addElementForm.addEventListener('submit', handleElementFormSubmit);

