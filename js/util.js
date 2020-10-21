'use strict';

(() => {
  const getRandomNum = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  window.util = {
    getRandomNum
  };
})();
