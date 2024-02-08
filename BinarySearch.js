// Binary search is applied only on sorted array

function BinarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(BinarySearch([-1,2,4,8], 9));
console.log(BinarySearch([-1,2,4,8], 4));

// Big-O = O(logn)