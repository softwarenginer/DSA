function InsertionSort() {
    for( let i=1; i<arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>numberToInsert) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = numberToInsert;
    }
}

const arr = [8,2,6,1];
InsertionSort(arr);
console.log(arr);

// Big-O = O(n^2)