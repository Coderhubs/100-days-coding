// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replacebananawithmango(fvrtfruits) {
    const index = fvrtfruits.indexOf("Banana");
    if (index !== -1)
        fvrtfruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}
// Example: Replacing "Banana" in the array
const fvrtfruits = ["Kiwi", "Banana", "strawberry"];
replacebananawithmango(fvrtfruits);
console.log(fvrtfruits);
export {};
