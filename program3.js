// remove duplicates from sorted array
function remouveDuplicates(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] == arr[i + 1]) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];

            }
            arr.length--;
        }
    }
    return arr;
}
var arr = [-4, -4, 3, 3, 5, 20, 44, 50, 50, 50];
console.log(remouveDuplicates(arr));