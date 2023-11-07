function sum(first, second) {
    const isFirstNumber = typeof first === 'number';
    const isSecondNumber = typeof second === 'number';
    if (isFirstNumber && isSecondNumber) {
        return first + second;
    }
    if (!isFirstNumber && !isSecondNumber) {
        throw new Error('Operands are not numbers');
    }
    
    if (!isFirstNumber) {
        throw new Error('The left operand is not number');
    }
    if (!isSecondNumber) {
        throw new Error('The right operand is not number');
    }
}