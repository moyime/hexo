function round(n, decimals = 0) {
    let value = `${Math.round(`${n}e${decimals}`)}e-${decimals}`;
    console.log(value);
    return Number(value);
}

// function addZero1(num, len = 2) {
//     return `0${num}`.slice(-len);
// }
function addZero1(num, len = 2) {
    return `0${num}`.slice(-len)
}