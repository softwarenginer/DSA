//Factorial of a number using Recursion

function Factorial(n){
    if(n < 2) {
        return 1;
    }
    return n * Factorial(n - 1);
}

console.log(Factorial(5));
console.log(Factorial(3));

// Wrost time complexity Big-O = O(n)