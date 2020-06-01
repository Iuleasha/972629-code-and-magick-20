'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;
var MAX_HEIGHT = 150;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var NAME_POSITION = 260;

var cloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  cloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  cloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var distance = CLOUD_X + BAR_DISTANCE * (i + 1) + BAR_WIDTH * i;
    var playerTime = Math.round(times[i]);
    var barHeight = MAX_HEIGHT * playerTime / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(playerTime, distance, 85 + (MAX_HEIGHT - barHeight));
    ctx.fillText(players[i], distance, NAME_POSITION);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(1 + Math.random() * (100 - 1)) + '%, 36%)';
    ctx.fillRect(distance, 90 + (MAX_HEIGHT - barHeight), 40, barHeight);
  }
};
