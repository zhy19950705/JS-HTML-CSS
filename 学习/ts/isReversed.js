"use strict";
exports.__esModule = true;
function isReversed(str) {
    var c = (str + "").charCodeAt(0);
    return c === 0x24 || c === 0x5f;
}
exports.isReversed = isReversed;
console.log(isReversed('$why'));
