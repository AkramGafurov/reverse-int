module.exports = function reverse(n) {
    n = String(Math.abs(n)).split('');
    let indStart = 0;
    let indexEnd = n.length - 1;
    while (indStart < indexEnd) {
        [n[indStart], n[indexEnd]] = [n[indexEnd], n[indStart]];
        indStart++;
        indexEnd--
    }
    return n.join('')
}

// console.log(reverse());
