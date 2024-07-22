function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// مثال:
let arr = [34, 7, 23, 32, 5, 62];
console.log(quickSort(arr));