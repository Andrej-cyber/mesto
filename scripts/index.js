const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const popUp = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const submitButton = document.querySelector('.popup__submit-button');
let formElement = document.querySelector('[name="myname1"]');
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
const profilePopup = document.querySelector('#popup-profile');
const addButton = document.querySelector('.profile__add-button');
const popUpAddImg = document.querySelector('#popup-addImg');
const closePopupAddButton = document.querySelector('.popup__close-button-add-pic');
const submitPictureButton = document.querySelector('.popup__submit-pic-button');
const popupCardsContainer = document.querySelector('.popup__cards-container');
let popupCardImg = document.querySelector('.popup__card-img');
let popupCardTitle = document.querySelector('.popup__card-title');
const elementContainer = document.querySelector('.elements__container');
const addElementForm = document.querySelector('[name="myname2"]');
const pictureNameInput = document.querySelector('#input-pic-name');
const pictureLinkInput = document.querySelector('#input-pic-link');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.element');
const elementImage = document.querySelector('.element__image');

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

function openPopup(popUp) {
    popUp.classList.add(popupOpenedClass);
};

function closePopup(popUp) {
    popUp.classList.remove(popupOpenedClass);
};

function openProfilepopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
    openPopup(profilePopup);
};

function closeProfilePopup() {
    closePopup(profilePopup);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup(popUp);
};

function openPopupAddImg() {
    pictureNameInput.value = pictureNameInput.textContent;
    pictureLinkInput.value = pictureLinkInput.textContent;
    openPopup(popUpAddImg);
};

function closePopupAddImg() {
    closePopup(popUpAddImg);
};

const getElement = (item) => {
    const element = elementsTemplate.cloneNode(true);
    const elementLikeIcon = element.querySelector('.element__icon');
    const elementDeleteBtn = element.querySelector('.element__icon-bin');
    const popupCardsCloseBtn = document.querySelector('.popup__close-cards-button');

    const elementImages = element.querySelector('.element__image');
    const popupCards = document.querySelector('#popup-cards');

    elementLikeIcon.addEventListener('click', handleLikeBtn);
    elementDeleteBtn.addEventListener('click', handleDeleteBtn);
    elementImages.addEventListener('click', openPopupImage);
    popupCardsCloseBtn.addEventListener('click', closePopupImage);

    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__title').textContent = item.name;

    function openPopupImage() {
        popupCardImg.src = item.link;
        popupCardTitle.textContent = item.name;
        openPopup(popupCards);
    };

    function closePopupImage() {
        closePopup(popupCards);
    };
    return element;
};

const renderElement = (item, wrap) => {
    const element = getElement(item)
    wrap.prepend(element);
};
const handleLikeBtn = (e) => {
    e.target.classList.toggle('element__icon_active');
};

const handleDeleteBtn = (e) => {
    e.target.closest('.element').remove();
};

const handleElementFormSubmit = (e) => {
    e.preventDefault();
    const element = {
        name: pictureNameInput.value,
        link: pictureLinkInput.value
    };

    renderElement(element, elementContainer);
    closePopupAddImg();
};

initialCards.forEach(item => {
    renderElement(item, elementContainer);
});

addElementForm.addEventListener('submit', handleElementFormSubmit);
editButton.addEventListener('click', openProfilepopup);
closeButton.addEventListener('click', closeProfilePopup);
addButton.addEventListener('click', openPopupAddImg);
closePopupAddButton.addEventListener('click', closePopupAddImg);
formElement.addEventListener('submit', formSubmitHandler);