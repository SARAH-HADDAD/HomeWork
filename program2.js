// remove a specific element from an array
function remouve(arr, num) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == num) {
            for (j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];

            }
            arr.length--;
        }
    }
    return arr;
}
var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(remouve(arr, 5));