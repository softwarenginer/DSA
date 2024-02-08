function IsPowerOfTwo(n) {
    if( n < 1) {
        return false;
    }
    while(n > 1) {
        if( n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(IsPowerOfTwo(5))
console.log(IsPowerOfTwo(6))
console.log(IsPowerOfTwo(8))

// Big-O = O(logn)

function IsPowerOfTwoBitwise(n) {
    if( n < 1) {
        return false;
    }
    return (n & (n-1)) 
}

console.log('Hi',IsPowerOfTwo(5))
console.log('Hi',IsPowerOfTwo(6))
console.log('Hi',IsPowerOfTwo(8))

// Big-O = O(1)