/* Use an ES6 Class to construct a Person instance.
 * */
 class Person{
   constructor(fname,lname){
     this.fname = fname;
     this.lastname = lname;
   }
 }

 const john = new Person('Hackers', 'Guild');
 const jack = new Person('Coders', 'Guild');

 console.log(john); // Person { fname: 'Hackers', lname: 'Guild' };
 console.log(john.fname); // Hackers
