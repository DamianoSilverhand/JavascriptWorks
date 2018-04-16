/* Use ES6 class `extends` syntax to construct a Developer class with
 * preferred language. Use `super` to initialize the firstname and lastname.
 * */

 /* Use ES6 class `extends` syntax to construct a Developer class with
  * preferred language. Use `super` to initialize the firstname and lastname.
  * */
  class Person{
    constructor(fname,lname){
      this.fname = fname;
      this.lastname = lname;
    }
  }

 class Developer extends Person{
   constructor(fname,lname,preferredLanguage){
     super(fname,lname);
     this.preferredLanguage=preferredLanguage;
 }
 }
 const jen = new Developer('John', 'Doe', 'Javascript');

 console.log(jen.fname); // 'John'
 console.log(jen.preferredLanguage); // 'Javascript
