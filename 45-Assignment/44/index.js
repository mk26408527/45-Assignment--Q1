function creat_car(maunfacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: maunfacturer,
        model: model,
    };
    options.forEach(function (options) {
        var _a = options.split(':'), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var my_car = creat_car("Toyota", "Corolla", "color: White", "sunroof: True", "owner: M_Huzaifa");
console.log(my_car);
