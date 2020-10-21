'use strict';

(() => {
  const arrayGeneration = function (quantity, names, lastNames, coatColors, eyesColor) {
    const someArray = [];
    for (let i = 0; i < quantity; i++) {
      const name = names[window.util.getRandomNum(0, names.length - 1)] + ` ` + lastNames[window.util.getRandomNum(0, lastNames.length - 1)];
      const mage = {
        name,
        coatColor: coatColors[window.util.getRandomNum(0, coatColors.length - 1)],
        eyesColor: eyesColor[window.util.getRandomNum(0, eyesColor.length - 1)],
      };

      someArray.push(mage);
    }

    return someArray;
  };

  window.dataCreation = {
    arrayGeneration
  };
})();
