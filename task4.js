function getMinimalCVS(initialArray) {
    this.versions = [initialArray];
    this.head = () => {
        return this.versions[this.versions.length - 1]
    };
    this.history = () => {
        return this.versions;
    };
    this.push = (elem) => {
        const newVersion = this.versions[this.versions.length - 1].slice()
        newVersion.push(elem);
        this.versions.push(newVersion);
    };
    this.pop = () => {
        const newVersion = this.versions[this.versions.length - 1].slice()
        const elem = newVersion.pop();
        this.versions.push(newVersion);
        return elem;
    };
    return this;
}

const cvs = getMinimalCVS(['a', 'b', 'c']);
// console.log(cvs);

console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());
/**
 * [
 *   ['a', 'b', 'c'],
 *   ['a', 'b'],
 *   ['a', 'b', 'd'],
 *   ['a', 'b', 'd', 'e']
 * ]
 */