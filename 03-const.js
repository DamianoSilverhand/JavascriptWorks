/* Use `const` so `x` can't change
 *
 * Consider renaming to const convention
 * */
const x = 1;

if( true ) {
  const x = 2; // should raise a TypeError
}

console.log(x); // 1
