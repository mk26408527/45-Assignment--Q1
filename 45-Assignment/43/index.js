function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the given items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy the delicious sandwich... \n");
}
make_Sandwich("chicken", "cheese", "tomato", "bread");
make_Sandwich("Paneer", "cheese", "egg", "bread");
make_Sandwich("Fish", "cheese", "cucumber", "bread", "mayo", "butter");
