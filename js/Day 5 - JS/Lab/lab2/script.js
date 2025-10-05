//1- 
// let phrases = ["JavaScript was created in just 10 days by Brendan Eich in 1995.",
//     "JavaScript is not the same as Java; they are completely different languages.",
//     "JavaScript can be used on both the client-side and server-side of web development.",
//     "ECMAScript is the standard upon which JavaScript is based.",
//     "The first version of JavaScript was called Mocha.",
//     "JavaScript is a prototype-based language.",
//     "Variables in JavaScript can be declared using var, let, or const.",
//     "JavaScript supports event-driven programming, making it great for user interactions.",
//     "With Node.js, JavaScript can be used for backend development.",
//     "JavaScript powers dynamic web content like animations and interactive forms."];

//     function showPhrase(){
//         let randomIndex=Math.floor(Math.random()*phrases.length)
//         let phrase = phrases[randomIndex];
//         let randomTips=document.getElementById("randomTips")
//         randomTips.textContent=phrase

//     }
// window.onload = showPhrase();


//2-
// let fullName='rahim mohammed amin';
// let name=fullName.slice(0,5);
// console.log(name);
// if(name==='rahim'){
//     alert("hello rahim")
// }else{
//     alert(`hello ${name}`)
// }
// document.write(`<p><b>hello ${name.toUpperCase()}</b></p>`);
//3-
//Product tax calculation
// let pricePro=prompt('enter product price');
// document.write(`Product tax is ${pricePro*0.010} `)





// 4-
// function displayDate(){
//     let d=new Date();
//     let Dateshow=d.toLocaleDateString();
//     let show=document.getElementById("show");
//     show.textContent=Dateshow
// }
// 5-
// let user=prompt("enter your Email?");
// if(user.includes("@")&& !user.startsWith("@")&& !user.endsWith("@")){
//     alert("valid Email")
// }else{
//     alert("invalid Email")
// }
//6-
// let userName=prompt("enter your fullname?");
// var rName=/^[A-Za-z]{3,20} [A-Za-z]{3,20}$/;
// if(rName.test(userName)){
//     alert("valid full name ")
// }else{
//     alert("invalid full name")
// }
// let rEmail=/^[^@]+@[^@]+$/;
// var userEmail=prompt("enter your Email?");
// if(rEmail.test(userEmail)){
//     alert("valid Email")
// }else{
//     alert("invalid Email")
// }
//7-in html file
//8-
// let studentsGrades=[60,100,10,15,85];
//sort the array
// studentsGrades.sort((a,b)=>(b-a));
// console.log(`sorted array:${studentsGrades}`)
//highest grade
// let highest=studentsGrades.find(num=>num===Math.max(...studentsGrades));
// console.log(highest);
//filter grades under 60
// let filterGrades=studentsGrades.filter(num=>num<60);
// console.log(filterGrades);
//9-
// let stdDegrees={
//     "ahmed":100,
//     "rabab":90,
//     "mohamed":80,
//     "sara":70,
//     "ali":60,
//     "nada":50,
//     "hadeer":55,
//     "nour":96,
//     "momen":91,
// }
//find
// let findStud=Object.entries(stdDegrees).find(([name,degree])=>degree>=90&&degree<=100);
// console.log(findStud);
//filter
// let filterStud=Object.entries(stdDegrees).filter(([name,degree])=>degree<60);
// console.log(filterStud);
//push
// let firstElement=Object.keys(stdDegrees).push("rahim",88);
// stdDegrees["rahim"]=88;
// console.log(stdDegrees)
// for(let degree in stdDegrees){
//     console.log(degree+":"+stdDegrees[degree])
// }

//pop
// let lastElement=Object.keys(stdDegrees).pop();
// delete stdDegrees[lastElement];
// for(let degree of stdDegrees){
//     console.log(degree)
// }
//sort
// let sorted=Object.entries(stdDegrees).sort((a,b)=>b[1]-a[1]);
// console.log(sorted);
//add use splice
// let addElement=Object.entries(stdDegrees).splice(0,0,["alaa",77],["hamas",68])
// console.log(stdDegrees);
//remove use splice
// let removeElement=Object.entries(stdDegrees).splice(2,2);
// console.log(stdDegrees);
//10-
// let  askUser=prompt("enter your Email?");
// let email="rabab farouq7@gmail.com";
// console.log(askUser.toLowerCase().trim()==email)
//11-
// let user={
//     firstName:'rabab',
//     lastName:'farouq',
//     email:'rabab farouq7@gmail.com',
//     age:24,
//     skills:['html','css','js','responsive','bootstrap','sass','angular','typescript','react'],
//     active:true,
//     phoneNumber:{
//         first:'01143058960',
//         second:'01500567348'
//     },
//     isActive:function(){
//         if(user.active===true){
//             return 'hello user'
//         }else{
//             return 'sorry you are not active'
//         }

//     },
//     getAge:function(){
//         if(user.age>=18){
//             return 'available'
//         }else{
//             return 'unavailable'
//         }
//     }


// }

// document.write(`
//     <div class='card'>
//  <h4>the firstName:${user.firstName}</h4>
// <h4>the lastName:${user.lastName}</h4>
// <p>the age:${user.age}</p>
// <p>the skiles:${user.skills}</p>
// <p>the phone:${user.phoneNumber.first}</p> 
// <p>isActive:${user.isActive()}</p>    
// <p>available user:${user.getAge()}</p>  
//     </div>

//     `)