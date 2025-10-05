//1-	
// var result=prompt("enter your name");
// document.write("welcome"+" "+ result)
//2-
// function sum(n1,n2){
//     var result=parseInt(n1)+parseInt(n2);
//     return result;
// }
// var n1=prompt("Enter 1st number");
// var n2=prompt("Enter 2nd number");
// var result=sum(n1,n2);
// console.log(result);
//3-
//way1
// function todayTemp(temp ){
// var result=(temp>30)?'Hot':'Cold'
// document.write(result)
// }
// todayTemp(40)
//way2
// var temp=40;
// var result=(temp>30)?'Hot':'Cold';
// console.log(result);
//4-
// function printTemp(temp,ac){
// if((temp>=25&&temp<=30)&&(ac>=25&&ac<=30)){
//     document.write('normal')
// }else if((temp<25)&&(ac<25)){
//     document.write("cold")
// }else if((temp>30)&&(ac>30)){
//     document.write("hot")
// }else{
//     document.write('Ambiguous, can’t detect')
// }}
// printTemp(22,23);
//5-	
// function studFaculty(stud){
//     switch(stud) {
//         case 'FCI':
//        document.write('You’re eligible to Programing tracks')
//           break;
//         case 'Engineering':
//             document.write('You’re eligible to Network and Embedded tracks')
//           break;
//           case 'Commerce':
//             document.write('You’re eligible to ERP and Social media tracks')
//           break;
//         default:
//             document.write('You’re eligible to SW fundamentals track')
//           // code block
//       }
// }
// studFaculty('Engineering')
//6-
// function odd(start,end){
//     for(let i=start; i<=end; i++){
//         if(i %2 ===1){
//             console.log(i)
//         }
//     }
// }
// odd(4,30);
 


//7-
// var userName= prompt("enter your name");
// if(typeof(userName)==='string'){
//     var birthYear=prompt("enter your Birth year");
//     if(isFinite(birthYear)){
//         var Age=prompt("enter your age");
//         if(isFinite()){
                
//             }
//         }
        
// }
// document.write("Name:" +" "+userName);
// document.write(  "<br> Birth year:" +' '+ birthYear);
// document.write(  "<br> Age:" +' '+ Age);

//8-
// let result=prompt("enter your mark");
// if(result>=90){
//     document.write("your result is: excellent")
// }else if(result>=80){
//     document.write("your result is: very good")
// }else if(result>=70){
//     document.write("your result is: good")
// }else if(result>=60){
//     document.write("your result is: accepted")
// }else{
//     document.write("your result is: failed")
// }
//9-
// let age =prompt("enter your age");
// let result = age > 18 ? "you can see the movie" : age == 18 ? "you can see the movie" : "you can not see the movie";
// document.write(`<h5>${result}</h5>`);
//10-
// let role=prompt("enter your role");
// switch(role){
//     case 'admin':
//     document.write("You can control updating, creation, and deletion.");
//     break;
//     case 'moderator':
//     document.write("You can control updating and creation.");
//     break;
//     case 'editor':
//     document.write("You can control updating ");
//     break;
//     default:
//     document.write("hello user")
// }
//11-
// let arr=['ali','ahmed','mohammed',1,2,3,4,5,'rabab','rahim'];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]==='number'){
//         continue;
//     }
//     console.log(arr[i]);
// }
//12-
// let arr=['ali','ahmed','mohammed',1,2,3,4,5,'rabab','rahim'];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i]==='number'){
//         break;
//     }
//     console.log(arr[i]);
// }
//13-
// function calcAge(age){
//     document.write(`your age is: ${age*365}days`)
// }
// calcAge(prompt("enter your age"));
//14-
// function pro(price,taxes,ads){
//     let pricePro=price+taxes+ads;
//     console.log(`the price is:${pricePro}`)
// }
// pro(1000,10,5);
//15-
// function calc(...numbers){
//     let sum=0;
//     for(let i=0; i<numbers.length; i++){
//       sum+=numbers[i];

//     }
//     console.log(sum)
// }
// calc(1,8,9,4,3)

