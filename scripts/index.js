const editButton = document.querySelector('.profile__edit-button');
const popupOpenedClass = 'popup_opened';
const formProfileElement = document.querySelector('.popup__container_type_profile');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const profilePopup = document.querySelector('.popup_type_profile');
const addButton = document.querySelector('.profile__add-button');
const popUpAddImg = document.querySelector('.popup_type_card-add');
const elementContainer = document.querySelector('.elements__container');
const addElementForm = document.querySelector('.popup__container_type_add-img');
const pictureNameInput = document.querySelector('.popup__text_type_card-name');
const pictureLinkInput = document.querySelector('.popup__text_type_card-link');
const elementsTemplate = document.querySelector('#elements-template').content.querySelector('.element');
const ESC_CODE = 'Escape';

function openPopup(popupWindow) {
    popupWindow.classList.add(popupOpenedClass);
    document.addEventListener('keydown', closeByEsc)
};

function closePopup(popupWindow) {
    popupWindow.classList.remove(popupOpenedClass);
    document.removeEventListener('keydown', closeByEsc)
};

function openProfilepopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileStatus.textContent;
    openPopup(profilePopup);
};

function profileFormSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = jobInput.value;
    closePopup(profilePopup);
};

function openPopupAddImg() {
    pictureNameInput.value = pictureNameInput.textContent;
    pictureLinkInput.value = pictureLinkInput.textContent;
    openPopup(popUpAddImg);
};

function closePopupAddImg() {
    closePopup(popUpAddImg);
};

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((popup) => {
    popup.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        }
        else if (event.target.classList.contains('popup')) {
            closePopup(popup);
        }
    });
});
function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};


const getElement = ({ link, name }) => {
    const element = elementsTemplate.cloneNode(true);
    const elementLikeIcon = element.querySelector('.element__icon');
    const elementDeleteBtn = element.querySelector('.element__icon-bin');

    const popupCardImg = document.querySelector('.popup__card-img');
    const popupCardTitle = document.querySelector('.popup__card-title');
    const popupCards = document.querySelector('.popup_type_picture');

    const elementImages = element.querySelector('.element__image');
    elementImages.addEventListener('click', openPopupImage);

    elementLikeIcon.addEventListener('click', handleLikeBtn);
    elementDeleteBtn.addEventListener('click', handleDeleteBtn);

    element.querySelector('.element__image').src = link;
    element.querySelector('.element__title').textContent = name;
    elementImages.alt = name;

    function openPopupImage() {
        popupCardImg.src = link;
        popupCardTitle.textContent = name;
        popupCardImg.alt = name;
        openPopup(popupCards);
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
    document.querySelector('.popup__submit-button_type_add-img').disabled = true;
};

initialCards.forEach(item => {
    renderElement(item, elementContainer);
});

addElementForm.addEventListener('submit', handleElementFormSubmit);
editButton.addEventListener('click', openProfilepopup);
addButton.addEventListener('click', openPopupAddImg);
formProfileElement.addEventListener('submit', profileFormSubmitHandler);





