function range(start, end, step = 1) {
    var arr = []
    var sign = Math.sign(end - start);
    console.log(sign);
    for (var i = start; ; i += step) {
        arr.push(i);
        if (Math.sign(end - i) != sign) {
            break;
        }
    }
    return arr
}

function reverseArray(arr) {
    _arr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        _arr.push(arr[i]);
    }
    return _arr;
}

function reverseArrayInPlace(arr) {
    var cnt = 0;
    var rev_cnt = arr.length - 1;
    var temp;
    while (cnt < rev_cnt) {
        temp = arr[cnt];
        arr[cnt] = arr[rev_cnt];
        arr[rev_cnt] = temp;
        cnt++; rev_cnt--;
    }
}

// test
// console.log(range(10, 11, 0.1));
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);