// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with: ".concat(items.join(" ,"), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "Tomato");
make_sandwich("avacado", "sprouts", "mustard", "mayo");
