var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favCountries = ["Japan", "Denmark", "Australia", "Uganda"];
console.log("original Order:", favCountries);
console.log("Alphabetical Order:", __spreadArray([], favCountries, true).sort());
console.log("Still in Original Order:", favCountries);
console.log("Reverse Order:", __spreadArray([], favCountries, true).reverse());
console.log("Still in Original Order:", favCountries);
console.log("original Array Reversed:", favCountries.reverse());
console.log("Back to Original Order:", favCountries.reverse());
console.log("Sorted in Alpha Order:", favCountries.sort());
console.log("original Array Reversed:", favCountries.reverse());
