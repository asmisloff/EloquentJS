function min(a, b) {
    if (b < a) {
        return b;
    }
    return a;
}

function isEven(n) {
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    if (n < 0) {
        return isEven(-n);
    }
    return isEven(n - 2);
}

function count_char(ch, str, case_sensitive = true) {
    var cnt = 0;
    if (!case_sensitive) {
        str = str.toLowerCase();
        ch = ch.toLowerCase();
    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            cnt++;
        }
    }

    return cnt;
}

//test
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-10));

// console.log(min(-1, 2));
// console.log(min(30, 12));

console.log(count_char("м", "Мама мыла раму"));
console.log(count_char("м", "Мама мыла раму", false));