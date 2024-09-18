function show_magicians(magicians) {
    magicians.map(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magician_names = ['Mr Bean', 'Tom & Jerry', 'Ben Ten'];
var copy_magician_names = magician_names.slice();
var copy_great_magician = make_great(copy_magician_names);
console.log("\nOriginal Array\n");
show_magicians(magician_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
