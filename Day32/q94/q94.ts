// Question 94: Use the .map() method to create a new array that contains 
//the length of each word from an array of words

const words: string[] = ["Books","stationary","Gadgets","Education"]
const lengths: number [] = words.map(words => words.length);
console.log(lengths);
