
function sum(a, b) {
    return a + b;
}

function subs(a, b) {
    return a - b;
}

function divis(a, b) {
    if (a == 0) {
        return 0;
    }
    else if (b == 0) {
        return 'BÖLEMEZSİN'
    }
    else {
        return a / b;
    }

}
module.exports = { sum: sum, subs:subs, divis:divis } 