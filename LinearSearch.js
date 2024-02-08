function LinearSearch(arr, target) {
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1;
}

console.log(LinearSearch([-1,3,4,6], 6));

// Big-O = O(n)