// return masked string
function maskify(cc) {
    const last4Digits = cc.slice(-4);
    const maskedNumber = last4Digits.padStart(cc.length, '#');
    return maskedNumber;
}
console.log(maskify("12324"));
