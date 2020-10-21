'use strict';

(() => {
  const setValidate = (minNameLength, maxNameLength, coatColors, eyesColors, fireballColors) => {
    const userNameInput = document.querySelector(`.setup-user-name`);
    const wizardSetup = document.querySelector(`.setup-wizard`);
    const coatColor = wizardSetup.querySelector(`.wizard-coat`);
    const eyesColor = wizardSetup.querySelector(`.wizard-eyes`);
    const fireballColor = document.querySelector(`.setup-fireball-wrap`);

    const inputCoatColor = document.querySelector(`input[name=coat-color]`);
    const inputEyesColor = document.querySelector(`input[name=eyes-color]`);
    const inputFireballColor = document.querySelector(`input[name=fireball-color]`);

    userNameInput.addEventListener(`input`, function () {
      const valueLength = userNameInput.value.length;

      if (valueLength < minNameLength) {
        userNameInput.setCustomValidity(`Ещё ` + (minNameLength - valueLength) + ` симв.`);
      } else if (valueLength > maxNameLength) {
        userNameInput.setCustomValidity(`Удалите лишние ` + (valueLength - maxNameLength) + ` симв.`);
      } else {
        userNameInput.setCustomValidity(``);
      }

      userNameInput.reportValidity();
    });

    coatColor.addEventListener(`click`, function () {
      const randomCoatColor = coatColors[window.util.getRandomNum(0, coatColors.length - 1)];
      coatColor.style.fill = randomCoatColor;
      inputCoatColor.value = randomCoatColor;
    });

    eyesColor.addEventListener(`click`, function () {
      const randomEyesColor = eyesColors[window.util.getRandomNum(0, eyesColors.length - 1)];
      eyesColor.style.fill = randomEyesColor;
      inputEyesColor.value = randomEyesColor;
    });

    fireballColor.addEventListener(`click`, function () {
      const randomFireballColor = fireballColors[window.util.getRandomNum(0, fireballColors.length - 1)];
      fireballColor.style.background = randomFireballColor;
      inputFireballColor.value = randomFireballColor;
    });
  };

  window.validate = {
    setValidate
  };
})();
