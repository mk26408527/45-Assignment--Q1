function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country));
}
describe_city();
describe_city("Lahore");
describe_city("Islamabad");
console.log("\n-------------------------");
