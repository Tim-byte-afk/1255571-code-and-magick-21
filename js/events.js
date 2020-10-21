'use strict';

(() => {
  const setEvents = (userDialog) => {
    const setupOpen = document.querySelector(`.setup-open`);
    const setupClose = document.querySelector(`.setup-close`);
    const windowTop = userDialog.style.top;
    const windowLeft = userDialog.style.left;

    const openPopup = function () {
      userDialog.classList.remove(`hidden`);
      window.dialog.activeMoveWindow(userDialog, windowTop, windowLeft);
      document.addEventListener(`keydown`, onPopupEscPress);
    };

    const closePopup = function () {
      userDialog.classList.add(`hidden`);

      document.removeEventListener(`keydown`, onPopupEscPress);
      userDialog.style.top = windowTop;
      userDialog.style.left = windowLeft;
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
  };

  window.events = {
    setEvents
  };
})();
