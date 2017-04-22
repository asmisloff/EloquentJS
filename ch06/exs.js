function fold(ars) {
    return ars.reduce(
        function (a1, a2) {
            return a1.concat(a2)
        })
}

var ancestry = JSON.parse(require("./ancestry.js"));

function average(array) {
    function plus(a, b) { return a + b }
    return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(
    function (person) {
        byName[person.name] = person
    })

function diff() {
    diffs = [];
    ancestry.forEach(
        function (child) {
            var m_name = child.mother;
            var m = byName[m_name];
            if (m != null) {
                var m_born = m.born;
                var c_born = child.born;
                diffs.push(c_born - m_born);
            }
        }
    )
    return average(diffs);
}

function groupBy(proc, arr, transformation = null) {
    var result = {}
    arr.forEach(
        function (elt) {
            var key = proc(elt)
            if (!(key in result)) {
                result[key] = []
            }
            if (transformation) {
                elt = transformation(elt)
            }
            result[key].push(elt)
        }
    )
    return result
}

function age_by_century() {
    var by_century = groupBy(
        function (person) {
            return Math.ceil(person.died / 100)
        },
        ancestry,
        function (person) {
            return person.died - person.born
        })

    for (century in by_century) {
        console.log(average(by_century[century]))
    }
}

function every(arr, func) {
    for (var i in arr) {
        if (!func(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, func) {
    for (var i in arr) {
        if (func(arr[i])) {
            return true;
        }
    }
    return false;
}

// test
// var arrays = [[1, 2, 3], [4, 5], [6]]
// console.log(fold(arrays))
// console.log(diff());
//age_by_century()
// console.log(every([NaN, NaN, NaN], isNaN));
// // → true
// console.log(every([NaN, NaN, 4], isNaN));
// // → false
// console.log(some([NaN, 3, 4], isNaN));
// // → true
// console.log(some([2, 3, 4], isNaN));
// // → false