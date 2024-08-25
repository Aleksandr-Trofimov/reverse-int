module.exports = function reverse(n) {
    let Nstr = Math.abs(n).toString();
    return Nstr.split("").reverse().join("");
};
