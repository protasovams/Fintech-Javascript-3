/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise(function(resolve, reject) {
    const resolved = [];
    promises.forEach(promise => {
      promise
        .then((res) => resolved.push(res))
        .then(() => {
          if (resolved.length === promises.length) {
            resolve(resolved);
          }
        })
    });
  });

}

module.exports = promiseAll;
