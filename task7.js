
function solutionFn(str) {
    let result = '';
    let nextUpper = false;
    for (const char of str) {
        if (nextUpper) {
            nextUpper = false;
            result += char.toUpperCase();
        } else if (char === '_') {
            nextUpper = true;
        } else {
            result += char;
        }
    }
    return result;
}

const snakeData = 'data_in_snake_case';

const result = solutionFn(snakeData);
console.log(result); // "dataInSnakeCase"
