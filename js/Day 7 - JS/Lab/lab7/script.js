//1
//c
let fullN=document.getElementById("fullN")
function changeBorder(){
   
fullN.style.border='2px solid red'
}

//d in html page

// e
document.getElementById("rpass").addEventListener("blur",function(){
    let pass=document.getElementById("pass").value;
    let rpass=this.value;
    let msgg=document.getElementById('msgg');
    if(pass !== rpass){
        msgg.innerHTML='password and repeat password should be the same'
        this.value="";
        this.focus()
    }else{
          msgg.innerHTML='';
    }
})
//2
// function validateForm(event){
    
//     let pass=document.getElementById("pass").value;
//     let rpass=document.getElementById("rpass").value;
// let fullName=document.getElementById("fullN").value;
// if(fullName.length<3 || pass !== rpass  ){
//   alert("Plz correct the validation errors first.");
//   event.preventDefault();
// }
// }

//5 in html page
//7
let container=document.createElement('div');
document.body.appendChild(container);
function elem(name,ages,numbers,emails){
    let head = document.createElement('h2');
    let age = document.createElement('h4');
    let number = document.createElement('h4');
    let email = document.createElement('a');
    let break1 = document.createElement('br');
    let break2 = document.createElement('br');
    let img = document.createElement('img');
    //content
    let contentHead = document.createTextNode(name);
    head.appendChild(contentHead);
    let contentAge = document.createTextNode(ages);
    age.appendChild(contentAge);
    let contentNumber = document.createTextNode(numbers);
    number.append(contentNumber);
    let contentEmail = document.createTextNode(emails);
    email.appendChild(contentEmail);
    img.src = "woman-591576__340.jpg";
    container.appendChild(head);
    container.appendChild(age);
    container.appendChild(number);
    container.appendChild(email);
    container.appendChild(break1);
    container.appendChild(break2);
    container.appendChild(img);

    //style
container.style.width='200px';
img.style.width='100%';
container.style.background='#444';
container.style.color='white';
container.style.padding='10px';
container.style.textAlign = 'center';
container.style.display='inlineBlock'
container.style.margin='3px';


}
let names=['rabab','mohammed','ali','rahim','ryhab','gamal','hamas','mazen','menna','farouq'];
let ages = ['24 years old', '34 years old', '22 years old', '34 years old', '31 years old', '24 years old', '25 years old', '29 years old', '26 years old', '27 years old'];
let numbers = ['01578792392', '01578792392', '01578792392', '01578792392', '01578792392', '01578792392', '01578792392', '01578792392', '01578792392', '01578792392'];
let emails = ['rabab@gmail.com', 'mohammed@gmail.com', 'ali@gmail.com', 'rahim@gmail.com', 'ryhab@gmail.com', 'gamal@gmail.com', 'hamas@gmail.com', 'mazen@gmail.com', 'menna@gmail.com', 'farouq@gmail.com'];

for(let i=0;i<10;i++){
    elem(names[i],ages[i],numbers[i],emails[i])
}

