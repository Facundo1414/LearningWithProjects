/* Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2] */

function arrayDiff(a, b) {
    let newArray = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (!(a[i] == b[j])) {
                newArray.push(a[i])
            }
        }
    }
    return newArray;
}

function arrayDiffv2 (a, b) 
{
let c = [];
    a.forEach(element => {
        if (!(b.includes(element))) {
            c.push(element)}});
    return c
}

console.log(arrayDiffv2([1,2],[1,2]));

function array_diffv3(a, b) {
    return a.filter(e => !b.includes(e));
}

function array_diffv3b(a, b) {
    return a.filter(function(x) { return b.indexOf(x) == -1; });
}

