'use strict';

const QUANTITY_ARRAYS = 4;

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;

const getRandomNum = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

const arrayGeneration = function (quantity) {
  const someArray = [];
  for (let i = 0; i < quantity; i++) {
    const name = WIZARD_NAMES[getRandomNum(0, WIZARD_NAMES.length - 1)] + ` ` + WIZARD_LAST_NAMES[getRandomNum(0, WIZARD_LAST_NAMES.length - 1)];
    const mage = {
      name,
      coatColor: WIZARD_COAT_COLORS[getRandomNum(0, WIZARD_COAT_COLORS.length - 1)],
      eyesColor: WIZARD_EYES_COLORS[getRandomNum(0, WIZARD_EYES_COLORS.length - 1)],
    };

    someArray.push(mage);
  }

  return someArray;
};

const wizards = arrayGeneration(QUANTITY_ARRAYS);

const userDialog = document.querySelector(`.setup`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

//
// БЛОК СОБЫТИЙ
//

const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

//
// БЛОК ВАЛИДАЦИИ
//

const userNameInput = document.querySelector(`.setup-user-name`);

userNameInput.addEventListener(`input`, function () {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё ` + (MIN_NAME_LENGTH - valueLength) + ` симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - MAX_NAME_LENGTH) + ` симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});

const wizardSetup = document.querySelector(`.setup-wizard`);
const coatColor = wizardSetup.querySelector(`.wizard-coat`);
const eyesColor = wizardSetup.querySelector(`.wizard-eyes`);
const fireballColor = document.querySelector(`.setup-fireball-wrap`);

const inputCoatColor = document.querySelector(`input[name=coat-color]`);
const inputEyesColor = document.querySelector(`input[name=eyes-color]`);
const inputFireballColor = document.querySelector(`input[name=fireball-color]`);

coatColor.addEventListener(`click`, function () {
  const randomCoatColor = WIZARD_COAT_COLORS[getRandomNum(0, WIZARD_COAT_COLORS.length - 1)];
  coatColor.style.fill = randomCoatColor;
  inputCoatColor.value = randomCoatColor;
});

eyesColor.addEventListener(`click`, function () {
  const randomEyesColor = WIZARD_EYES_COLORS[getRandomNum(0, WIZARD_EYES_COLORS.length - 1)];
  eyesColor.style.fill = randomEyesColor;
  inputEyesColor.value = randomEyesColor;
});

fireballColor.addEventListener(`click`, function () {
  const randomFireballColor = WIZARD_FIREBALL_COLORS[getRandomNum(0, WIZARD_FIREBALL_COLORS.length - 1)];
  fireballColor.style.background = randomFireballColor;
  inputFireballColor.value = randomFireballColor;
});
