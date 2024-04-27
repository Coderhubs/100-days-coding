//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

function numbergreatorthanTen (arr:number[]): number[] {
    return arr.filter(number => number > 10);
};
const numbers: number[] = [1,20,9,30,45,10]
console.log(numbergreatorthanTen(numbers));