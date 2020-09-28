`use strict`

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

const colorWhite = '#ffffff';
const colorBlack = '#000000';
const colorShadow = 'rgba(0, 0, 0, 0.7)';
const colorRed = 'rgba(255, 0, 0, 1)';


const renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getRandomNumber = function(min, max) {
  return Math.random() * (max - min) + min;
}

const getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, colorShadow);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, colorWhite);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = colorBlack;
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + TEXT_GAP);

  const maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = colorBlack;
    ctx.fillText(
      names[i],
      BAR_X + BAR_GAP*i,
      BAR_TEXT_X
    );
    ctx.fillText(
      Math.round(times[i]),
      BAR_X + BAR_GAP*i,
      BAR_TEXT_X - ((BAR_HEIGHT * times[i]) / maxTime) - TEXT_Y
    );
    if(names[i] === 'Вы') {
      ctx.fillStyle = colorRed;
    } else {
      ctx.fillStyle = 'hsl(240, 100%, ' + getRandomNumber(1, 100) + '%)';
    }
    ctx.fillRect(
      BAR_X + BAR_GAP*i,
      BAR_Y + (BAR_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime),
      BAR_WIDTH,
      (BAR_HEIGHT * times[i]) / maxTime,
    );
  }
}
