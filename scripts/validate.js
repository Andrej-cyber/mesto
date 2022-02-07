// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// formSelector: '.popup__form',
// inputSelector: '.popup__input',
// submitButtonSelector: '.popup__button',
// inactiveButtonClass: 'popup__button_disabled',
// inputErrorClass: 'popup__input_type_error',
// errorClass: 'popup__error_visible'

const formsValidationConfig = {
    formSelector: '.popup_type_form',
    inputSelector: '.popup__text'
}

function enableValidation(data) {
    const forms = [...document.querySelectorAll(data.formSelector)];

    forms.forEach(form => addFormListeners(form, data));
};

function addFormListeners(form, config) {

    console.log(form, config);

    form.addEventListener('submit', handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault();
}

enableValidation(formsValidationConfig);