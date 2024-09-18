function creat_car (maunfacturer, model, ...options) {
    let car = {
        manufacturer: maunfacturer,
        model: model,
    };

    options.forEach(options =>{
        let [key, value] = options.split(':');
        car[key.trim()] = value.trim();
    });

    return car;
}

let my_car = creat_car("Toyota", "Corolla", "color: White", "sunroof: True", "owner: M_Huzaifa");

console.log(my_car);
