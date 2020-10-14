'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;

const TEXT_X = 120;
const TEXT_Y = 30;
const TEXT_GAP = 30;

const BAR_X = 140;
const BAR_Y = 100;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const BAR_TEXT_X = 260;
const BAR_TEXT_Y = 260;
const BAR_MAX_LIGHTNESS = 100;

const COLOR_WHITE = `#ffffff`;
const COLOR_BLACK = `#000000`;
const COLOR_SHADOW = `rgba(0, 0, 0, 0.7)`;
const COLOR_RED = `rgba(255, 0, 0, 1)`;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, COLOR_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, COLOR_WHITE);

  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText(`Ура вы победили!`, TEXT_X, TEXT_Y);
  ctx.fillText(`Список результатов:`, TEXT_X, TEXT_Y + TEXT_GAP);

  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    const textX = BAR_X + BAR_GAP * i;
    const barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    const timeY = BAR_TEXT_X - barHeight - TEXT_Y;

    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(names[i], textX, BAR_TEXT_Y);

    ctx.fillText(Math.round(times[i]), textX, timeY);

    if (names[i] === `Вы`) {
      ctx.fillStyle = COLOR_RED;
    } else {
      ctx.fillStyle = `hsl(240, 100%, ` + getRandomNumber(1, BAR_MAX_LIGHTNESS) + `%)`;
    }
    ctx.fillRect(
        textX,
        BAR_Y + BAR_HEIGHT - barHeight,
        BAR_WIDTH,
        barHeight
    );
  }
};
