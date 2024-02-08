function IsPrimeNumber(n) {
    if(n < 2 ) {
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(IsPrimeNumber(2));
console.log(IsPrimeNumber(1));
console.log(IsPrimeNumber(5));

// Big-O = O(sqrt(n))