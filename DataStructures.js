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

// test
// console.log(range(10, 11, 0.1));