'use strict';

const QUANTITY_ARRAYS = 4;

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LAST_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

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
userDialog.classList.remove(`hidden`);

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
