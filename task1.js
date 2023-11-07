/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array - массив
 * @param {Function} filterFn - фильтрующая функция
 * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
 * @returns {Array} - отфильтрованный массив
 */
function filter(array, filterFn, inplace = false) {
    const newArray = []
    for (let elem of array) {
        const filterResult = filterFn(elem);
        if (filterResult) {
            newArray.push(elem);
        }
    }
    if (inplace) {
        array.splice(0, array.length, ...newArray)
    }
    return newArray;
}


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// filter with inplace = false
const result1 = filter(words, (word) => word.length > 6);
console.log(result1); // ["exuberant", "destruction", "present"]

// filter with inplace = true
const result2 = filter(words, (word) => word.length > 6, true);
console.log(result2); // ["exuberant", "destruction", "present"]