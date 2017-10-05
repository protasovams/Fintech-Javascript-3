/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log, version = "1") {
  switch (version) {
    case "1":
      timer1(logger);
      break;
    case "2":
      timer2(logger);
      break;
    default:
      throw Error("unknown version '" + version + "'")
  }
}
function timer1 (logger) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}


function timer2 (logger) {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}


//timer();
//timer(undefined, "1"); // TODO как передать первый аргумент лучше?
//timer(undefined, "2");


/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {

}


/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  function add_to_result(x) {
    if (typeof x == "undefined") {
      return result;
    }
    result += x;
    return add_to_result;
  }
  let result = 0;
  if (typeof x == "undefined") {
    return result;
  }
  result += x;
  return add_to_result;
}

//console.log(sum(1)(2)(8)());
//console.log(sum(-2)());
/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  var letters = {};
  // считаем все буквы первой строки 
  for (let i=0; i<first.length; i++) {
    letters[first[i]] === undefined ? letters[first[i]] = 1 : letters[first[i]]++;
  }
  // вычитаем все буквы второй строки
  for (let i=0; i<second.length; i++) {
    let curLetterNum = letters[second[i]];
    if (curLetterNum === undefined || curLetterNum === 0) {
      return false;
    }
    letters[second[i]]--;
  }
  // проверяем, что всех букв осталось 0
  for (let key in letters) {
    if (letters[key] !== 0) {
      return false;
    }
  }
  return true;
}



/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  arr.sort(sortNumbers);
  let uniqueArr = [];
  let curValue;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] !== curValue){
      curValue = arr[i];
      uniqueArr.push(curValue);
    }
  }
  return uniqueArr;
}
function sortNumbers(a,b) {
  return a - b;
}


/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  first.sort(sortNumbers);
  second.sort(sortNumbers);
  let resultArr = [];
  var curValue;
  for (let i=0, j=0; i<first.length, j<second.length; ) {
    // уже положенные значения пропускаем
    if (first[i] == curValue) {
      i++;
      j++;
      continue;
    }
    if (first[i] === second[j]){
      // совпадающие значения кладем в массив
      curValue = first[i];
      resultArr.push(curValue);
      i++;
      j++;
    } else if (first[i] < second[j]) {
      // пролистываем первый массив
      i++;
    } else {
      // пролистываем второй массив
      j++;
    }
  }
  return resultArr;
}

//getIntersection([1, 9, 10, 3, 5, 7], [10, 3, 4])
//getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4] )

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {

}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};