//& 1
// function handleError(){
//     console.log(`There is an error loading the image.`);
    
// }
// document.querySelector(".img").onerror=function () {
//     console.log(`There is an error loading the image.`);
// }
//& 2
// setInterval(function () {
//     let date=new Date();
//     console.log(`time now is ${date.toLocaleTimeString()}`);
    
// },1000)
//& 3
// let num1=parseInt(prompt(`enter num one`));
// let num2=parseInt(prompt(`enter num two`));
//calc
// let calc=new Function("n1", "n2", "alert( (n1 + n2));");
// calc(num1,num2)
// let calc=new Function("n1", "n2", "alert( (n1 - n2));");
// calc(num1,num2)
// let calc=new Function("n1", "n2", "alert( (n1 * n2));");
// calc(num1,num2)
// let calc=new Function("n1", "n2", "alert( (n1 / n2));");
// calc(num1,num2)

//& 4
    // (function () {
     
    //   window.counter = 0; 
    //   console.log( window.counter);
    // })();


//&5
//a
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
//b
// Person.prototype.printPerson=function () {
//     console.log(`the name is ${this.name} and the age is ${this.age}`);
    
// }
//c
// function Student(name,age,faculty, total_mark = 0){
//     Person.call(this,name,age);
//     this.faculty=faculty;
//     this.total_mark =total_mark ;


//       let min_degree = 60;

//   function checkSuccess(mark) {
//     return mark >= min_degree ? "Succeed" : "Fail";
//   }


//   this.checkResult = function () {
//     alert(" Result: " + checkSuccess(this.total_mark));
//   };
// }
//d

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
//e
// Student.prototype.printStudent = function () {
//   console.log(
//     " Name: " + this.name +
//     ", Age: " + this.age +
//     ", Faculty: " + this.faculty +
//     ", Total Mark: " + this.total_mark
//   );
// };

// let st1 = new Student("rabab", 23, "Engineering", 80);

// st1.printPersonrintPerson();   
// st1.printStudent();  
// st1.checkResult();   


// st1.total_mark = 50;
// st1.checkResult();  
// console.log(st1.min_degree);   
// console.log(st1.checkSuccess); 

//&6
// let crs1 = {
//   courseName: "JavaScript",
//   courseMaxDegree: 100,
//   printCourse: function () {
//     console.log("Max. Degree of " + this.courseName + " Course is " + this.courseMaxDegree);
//   }
// };


// let crs2 = {
//   courseName: "React",
//   courseMaxDegree: 120,
//   printCourse: function () {
//     console.log("Max. Degree of " + this.courseName + " Course is " + this.courseMaxDegree);
//   }
// };


// crs1.printCourse(); 
// crs2.printCourse();  
//&7
// (function () {
//     baz=5;
//     var bar=10
// })();
// console.log(baz);
// console.log(bar);

