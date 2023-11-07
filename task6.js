function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function hitOrRun(a, b) {
    const randomNumber = Math.floor(Math.random() * (b - a + 1) + a);
    if (isPrime(randomNumber)) {
        return 'run';
    } else {
        return 'hit';
    }
}

console.log(hitOrRun(5, 10))