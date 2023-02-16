String.prototype.yell = function () {
    return `OMG!!!${this.toUpperCase()}!!!! AGHGHGHGH!`;
};

'bees'.yell();

Array.prototype.pop = function () {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};
const nums = [6, 7, 8, 9];
nums.pop();