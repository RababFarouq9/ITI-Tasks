//1-
function showKey(ev){
   
    alert(ev.code)
}
//2-
//   var i;
// function getDate(){
// var currentDate=new Date()
// var clock= document.getElementById("clock");
// document.getElementById("show").innerHTML="start clock"
//   clock.innerHTML=currentDate.toLocaleTimeString().bold()
// }
// function IntervalDate(){
//   i=window.setInterval(getDate,1000)
// }
// function clearInt(e){ 

//  document.getElementById("clear").innerHTML="stop clock"
//   clearInterval(i)
  
   
// }
//3-

// let imagess=["img1.jpg","img2.jpg","img3.jpg","img3.jpg"];
// let image1=document.getElementById("image1");
// let prev=document.getElementById("prev");
// let next=document.getElementById("next");
// let currentindex=0;
// function updateImg(){
//  image1.src =imagess[currentindex]

// }
// function nextImg(){
//   currentindex++;
//   if(currentindex>=imagess.length){
//     currentindex=0
//   }
//   updateImg()
// }

// function prevImg(){
//   currentindex--;
//   if(currentindex<0){
//     currentindex=imagess.length-1
//   }
//   updateImg()
// }
//4-im page welcom.html
//5-
// let openWin=document.getElementById("openWin");
// let closeWin=document.getElementById("closeWin");
// let addWin;
// openWin.addEventListener("click",function (event) {
//   event.preventDefault();
//   setTimeout(() => {
//  addWin= window.open('new win.html',"_blank","width=500,height=500");
//   }, 3000);

// })

// let win;
// function openWin(){
//   setTimeout(()=>{
//     win=window.open('new win.html','_blank','width=111,height=111')
//   },3000)
// }
// function closeWin(){
//     win.close();
// }
//6-
// function openScrollWin(checkbox){
// if(checkbox.checked){
//   winScroll=window.open('win2.html','_blank',"width=200,height=200");
// }
 

// }
//7-
// function validate(event){
//   let key=event.key;
//   let keyNum=parseInt(key);
//   if(Number.isInteger(keyNum)){
//     event.preventDefault();
//   }
// }

//8-
// let dollar=document.getElementById("dollar");
// let pound=document.getElementById("pound");
// dollar.onkeyup=function(){
//     pound.value=dollar.value*70;
// }
// pound.onkeyup=function(){
//     dollar.value=pound.value/70;
// }
//9-
// let after=document.getElementById("after");
// let before=document.getElementById("before");
// let append=document.getElementById("append");
// let content=document.getElementById("content");
// let container=document.getElementById("container");
// after.onclick=function(){
//     container.after(contant);
// }
// before.onclick=function(){
//     container.before(contant);
// }
// append.onclick=function(){
//     container.append(contant);
// }
//10-
// let focus=document.getElementById("focus");
//  focus.onfocus=function(){
//      focus.style.background='red';
//  }
//  focus.onblur=function(){
//     focus.style.background='yellow';
// }
