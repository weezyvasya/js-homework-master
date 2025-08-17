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
  return arr[randomNumber(0, arr.length - 1)];
}

function randomCombination(arr1, arr2) {
  return `${arr1[randomNumber(0, arr1.length - 1)]}  ${
    arr2[randomNumber(0, arr2.length - 1)]
  }`;
}

function randomEventObj(arrTitle, arrDescription, arrName, arrSurname) {
  return {
    date: randomData(),
    title: randomString(arrTitle),
    description: randomString(arrDescription),
    countLikes: randomNumber(0, 10000),
    names: randomCombination(arrName, arrSurname),
    registrationDisabled: randomBoolean(),
  };
}

function arrRandomEventObj(number) {
  let arr = [];

  for (let i = 0; i < number; i++) {
    arr.push(
      randomEventObj(
        [1, 2, 3, 4, 5],
        ["fsfsffsfsf", "sdsdsdsdsd", "sdsdsdsd", "ssssssssssssss", "ee"],
        ["Vasya", "Nastya", "Kirill", "Ivan"],
        ["Kopkarev", "Kraynova", "Ivanov", "Morozov"]
      )
    );
  }

  return arr;
}

export default {
  randomBoolean,
  randomData,
  randomNumber,
  randomString,
  randomCombination,
  randomEventObj,
  arrRandomEventObj,
};
