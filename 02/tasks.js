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

console.log(sum(1)(2)(8)());
console.log(sum(-2)());
/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  for (let i=0; i<first.length; i++) {
    if (second.indexOf(first[i]) < 0) {
      return false;
    }
    // вырезаем из второй строки каждую букву первой строки
    second = second.replace(first[i],"");
  }
  if (second == "") {
    return true;
  }
  return false;
}

console.log(anagram("", ""));
console.log(anagram("a", "a"));
console.log(anagram("abcd", "dabc"));
console.log(anagram("просветитель", "терпеливость"));
console.log(anagram("?!! доколе?", "коледо??!! "));

console.log(anagram("a", ""));
console.log(anagram("", "a"));
console.log(anagram("?!! доколе?", "коледо??!!"));


/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  return [];
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  return [];
}

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