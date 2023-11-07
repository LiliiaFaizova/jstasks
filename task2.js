
function solutinFn(obj) {
    const result = {};
    for (let value of Object.values(obj)) {
        const valueType = typeof value;
        if (result[valueType]) {
            result[valueType] += 1;
        } else {
            result[valueType] = 1;
        }
    }
    return result;
}


const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObj = solutinFn(initialObj);

console.log(resultObj);
/**
 * {
 *   string: 1,
 *   number: 2,
 *   object: 2
 * } 
 */