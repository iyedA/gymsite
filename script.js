'use strict';
let stonesradio = document.querySelector('#stonesjoke');
let hiddenstones = document.querySelector('.hiddenstones');
let normalweight = document.querySelector('.normalweight');
let ageChecker = document.querySelector('#ageCheck');
let age = document.querySelector('.age');
let height = document.querySelector('.height');
let heightChecker = document.querySelector('#heightCheck');
let weight = document.querySelector('.weight');
let weightChecker = document.querySelector('#weightCheck');
//
//
//
//
// ageCheckerFunction defining
let ageCheckerFunction = function () {
  let ageCheck = Number(age.value);
  while (
    ageCheck != '' &&
    (ageCheck > 30 || ageCheck < 14 || isNaN(ageCheck))
  ) {
    if (ageChecker.classList.contains('hiddenage')) {
      ageChecker.classList.replace('hiddenage', 'shownage');
    }
    ageCheck = '';
    age.textContent = '';
  }
  if (ageCheck <= 30 && ageCheck >= 14) {
    if (ageChecker.classList.contains('shownage')) {
      ageChecker.classList.replace('shownage', 'hiddenage');
    }
  }
};
//
//
//
// ageCheckerFunction Event
age.addEventListener('change', ageCheckerFunction);
//
//
//
// heightCheckerFunction defining
let heightCheckerFunction = function () {
  let heightCheck = Number(height.value);
  while (
    heightCheck != '' &&
    (heightCheck < 100 || heightCheck > 200 || isNaN(heightCheck))
  ) {
    if (heightChecker.classList.contains('hiddenheight')) {
      heightChecker.classList.replace('hiddenheight', 'shownheight');
    }
    if (isNaN(heightCheck)) {
      document.getElementById(
        'heightCheck'
      ).innerHTML = `That's not even a number...`;
    } else {
      document.getElementById(
        'heightCheck'
      ).innerHTML = `So you're trying to tell me you're ${Number(
        height.value
      )} cms tall..?`;
    }
    heightCheck = '';
    height.textContent = '';
  }
  if (heightCheck <= 200 && heightCheck >= 100) {
    if (heightChecker.classList.contains('shownheight')) {
      heightChecker.classList.replace('shownheight', 'hiddenheight');
    }
  }
};
//
//
//
// heightCheckerFunction Event
height.addEventListener('change', heightCheckerFunction);
//
//
//
// weightCheckerFunction defining
let weightCheckerFunction = function () {
  let weightCheck = Number(weight.value);
  while (
    weightCheck != '' &&
    (weightCheck < 35 || weightCheck > 150 || isNaN(weightCheck))
  ) {
    if (weightChecker.classList.contains('hiddenweight')) {
      weightChecker.classList.replace('hiddenweight', 'shownweight');
    }
    if (isNaN(weightCheck)) {
      document.getElementById(
        'weightCheck'
      ).innerHTML = `That's not even a number...`;
    } else {
      document.getElementById(
        'weightCheck'
      ).innerHTML = `So you're trying to tell me you weigh ${Number(
        weight.value
      )}kgs..?`;
    }
    weightCheck = '';
    weight.textContent = '';
  }
  if (weightCheck <= 150 && weightCheck >= 35) {
    if (weightChecker.classList.contains('shownweight')) {
      weightChecker.classList.replace('shownweight', 'hiddenweight');
    }
  }
};
//
//
//
// weightCheckerFunction Event
weight.addEventListener('change', weightCheckerFunction);
//
//
//
// Stones checker
stonesradio.addEventListener('change', function () {
  hiddenstones.classList.replace('hiddenstones', 'shown');
  console.log('Stones button pressed');
  document.querySelector('.stonesjokelabel').style.textDecoration =
    'line-through';
  document.querySelector('.stonesjokelabel').style.color = 'red';
  stonesradio.disabled = true;
  stonesradio.checked = false;
  document
    .querySelector('.normalweight')
    .addEventListener('change', function () {
      if (hiddenstones.classList.contains('shown'))
        hiddenstones.classList.replace('shown', 'hiddenstones');
    });
});
