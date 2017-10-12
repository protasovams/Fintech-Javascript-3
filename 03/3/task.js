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
    let resolvedCount = 0;
    promises.forEach((promise, i) => {
      promise
        .then(res => {resolved[i] = res; resolvedCount++}, reject)
        .then(() => {
          if (resolvedCount === promises.length) {
            resolve(resolved);
          }
        })
    });
  });

}

module.exports = promiseAll;
