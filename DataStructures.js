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

function arrayToList(arr) {
    var last;
    var list;
    var len = arr.length;
    if (len == 0) {
        return {head : null, tail : null};
    }
    else {
        last = arr[len-1];
        list = {head : last, tail : null};
        for (var i = len - 2; i >= 0; i--) {
            list = {head : arr[i], tail : list};
        }
        return list;
    }
}

function listToArray(list, arr = []) {
    if ("head" in list) {
        arr.push(list.head);
    }
    else {
        return null;
    }
    if (list.tail == null) {
        return arr;
    }
    if ("tail" in list) {
        return listToArray(list.tail, arr);
    }
    else {
        return null;
    }
    // return arr;
}

function cons(first, second) {
    return {head: first, tail: second};
}
var prepend = cons;

function nth(list, index) {
    if (index == 0 || list.tail == null) {
        return list.head;
    }
    return nth(list.tail, index--);
}
// test
// console.log(range(10, 11, 0.1));
// console.log(reverseArray(["A", "B", "C"]));
// var arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// console.log(arrayToList([10, 20]));
// console.log(listToArray({ head: 10, tail: { head: 20, tail: { head: 30, tail: null } } }));
// console.log(prepend(10, prepend(20, null)));
// console.log(nth(arrayToList([10, 20, 30]), 1));