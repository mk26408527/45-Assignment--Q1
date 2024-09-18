function show_magicians(magicians) {
    magicians.map(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magician_names = ['Mr Bran', 'Tom & Jerry', 'Ben Ten'];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
