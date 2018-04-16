/*
 1. Write a function that when given an array sums only the odd values and returns that sum. Assume the array is an array of integers.
*/

const sumOdd = (numbers)=>{
  const arr = [];
  numbers.forEach((item)=>{
    item%2===1 ?
      arr.push(item) : " "
  });console.log(arr.reduce((a,b)=>a+b))
}
sumOdd([1,2,3,4,5,]);

/*2. Given the following array, create a function that when you pass it students array with the passing mark, it returns the names of the students who passed;
consdider using filters and the es6 map

*/
var students = [
   {
     name: 'corey',
     score: 89
   },
   {
     name: 'rachel',
     score: 95
   },
   {
     name: 'alex',
     score: 91
   },
   {
     name: 'John',
     score: 76
   }
 ]
 const passing_again = (array,grade)=>{
   return array.filter(a => a.score >= grade).map(a=>a.name);
 };
passing(students, 90) // => ['rachel', 'alex'];
/*
3. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
  Sample Output:
  "0 is even"
  "1 is odd"
  "2 is even"
 */

 oddEven = (a,b)=>{for( let i = a; i < b+1; i++){
   i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`)
 }
                 };
 oddEven(0,15)
