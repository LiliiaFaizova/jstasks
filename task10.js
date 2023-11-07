function solutionFn(num) {
    let isFinished = false;
    while (!isFinished) {
        let newNum = 1;
        for (const char of num.toString()) {
            const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
            newNum *= digit;
        }
        if (newNum < 10) {
            isFinished = true;
        }
        num = newNum;
    }
    return num;
}

console.log(solutionFn(4));     // возвращает 4, так как уже одноразрядное
console.log(solutionFn(42));    // возвращает 8, так как 4 * 2 = 8
console.log(solutionFn(999));   // возвращает 2, так как 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, и наконец 1 * 2 = 2 
