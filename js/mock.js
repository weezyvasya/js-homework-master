function randomBoolean() {
  return Math.random() < 0.5;
}

function randomData() {
  return new Date(Math.random() * 1000000000000);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomString(arr) {
  return arr.at(randomNumber(0, arr.length - 1));
}

function randomCombination(arr1, arr2) {
  return `${arr1[randomNumber(0, arr1.length - 1)]}  ${
    arr2[randomNumber(0, arr2.length - 1)]
  }`;
}

function randomEventObjClear(data){
  return data
}


function randomEventObj(arrTitle, arrDescription, arrName, arrSurname) {
  return randomEventObjClear({
    date: randomData(),
    title: randomString(arrTitle),
    description: randomString(arrDescription),
    countLikes: randomNumber(0, 10000),
    names: randomCombination(arrName, arrSurname),
    registrationDisabled: randomBoolean(),
  });
}


function arrRandomEventObj(number) {
 return Array.from({length: number }, ()=> { return {
    date: randomData(),
    title: randomString('adsa'),
    description: randomString('adsd'),
    countLikes: randomNumber(0, 10000),
    names: randomCombination('ads', 'adsad'),
    registrationDisabled: randomBoolean(),
  } })
}


function updateListner (listnerEvent) {
   document.querySelectorAll('.registration-button').forEach((btn) => btn.removeEventListener('click', listnerEvent))
   document.querySelectorAll('.registration-button').forEach((btn) => btn.addEventListener('click', listnerEvent))
}



export {
  randomBoolean,
  randomData,
  randomNumber,
  randomString,
  randomCombination,
  randomEventObj,
  arrRandomEventObj,
  updateListner
};
