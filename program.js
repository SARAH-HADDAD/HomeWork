//a JavaScript program that  sorts the items of an array.
var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1], min;

for (var j = 0; j < (arr.length) - 1; j++) {
    min = arr[j];
    for (var i = j + 1; i < arr.length; i++) {

        if (min > arr[i]) {
            arr[j] = arr[i];
            arr[i] = min;
            min = arr[j];

        }
    }
}
console.log(arr);