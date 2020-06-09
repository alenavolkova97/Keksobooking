'use strict';

var ANNOUNCEMENTS_AMOUNT = 8;
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var CHECKIN_AND_CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
  'description'];
var CHARACTERISTICS = ['красивые', 'виды', 'уютные', 'комнаты', 'удобные', 'чистые', 'просторные', 'апартаменты',
  'прекрасные', 'атмосферные', 'удобства', 'недорогие', 'новые'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var map = document.querySelector('.map__overlay');

var getRandomNumber = function (minRandomNumber, maxRandomNumber) {
  var randomNumber = Math.round(minRandomNumber + Math.random() * (maxRandomNumber - minRandomNumber));
  return randomNumber;
};

var getRandom = function (array, result) {
  var randomArray = array.slice().sort(function () {
    return getRandomNumber(0, 1) - 0.5;
  });
  if (result === 'array') {
    var i = getRandomNumber(0, randomArray.length - 1);
    randomArray.splice(i); // допускается, что в новом массиве вообще не останется значений
    return randomArray;
  } else if (result === 'string') {
    var string = '';
    for (var i = 0; i <= getRandomNumber(0, randomArray.length - 1); i++) { // пофиксить
      string += ' ' + randomArray[i]; // убрать пустую строку
    }
    return string;
  } else {
    return null;
  }
};

var getRandomAnnouncement = function (i) {
  var addressObject = {
    'x': getRandomNumber(0, map.offsetWidth),
    // check
    'y': getRandomNumber(130, 630)
  };
  var announcement = {
    'author': {
      'avatar': 'img/avatars/user0' + (i + 1) + '.png'
    },
    'offer': {
      'title': getRandom(CHARACTERISTICS, 'string'),
      'address': addressObject['x'] + ', ' + addressObject['y'],
      'price': getRandomNumber(1, 1000000),
      'type': TYPES[getRandomNumber(0, 3)],
      'rooms': getRandomNumber(1, 3),
      'guests': getRandomNumber(1, 3),
      'checkin': CHECKIN_AND_CHECKOUT_TIME[getRandomNumber(0, 2)],
      'checkout': CHECKIN_AND_CHECKOUT_TIME[getRandomNumber(0, 2)],
      'features': getRandom(FEATURES, 'array'),
      'description': getRandom(CHARACTERISTICS, 'string'),
      'photos': getRandom(PHOTOS, 'array'),
    },
    'location': addressObject
  };
  return announcement;
};

var getRandomAnnouncements = function () {
  var announcementsArray = [];
  for (var i = 0; i < ANNOUNCEMENTS_AMOUNT; i++) {
    announcementsArray.push(getRandomAnnouncement(i));
  }
  return announcementsArray;
};

