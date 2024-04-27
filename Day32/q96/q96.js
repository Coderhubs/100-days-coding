// : Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array
function calculatesumofnumbers(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
const numbers = [1, 20, 9, 30, 45, 10];
console.log(calculatesumofnumbers(numbers));
export {};
