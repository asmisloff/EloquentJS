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

function diff () {
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

// test
// var arrays = [[1, 2, 3], [4, 5], [6]]
// console.log(fold(arrays))
// console.log(diff());