//1
//c
let fullN=document.getElementById("fullN")
function changeBorder(){
   
fullN.style.border='2px solid red';
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

/d

    function validateName(){
    let fullN=document.getElementById("fullN");
let msg=document.getElementById("msg");
if(fullN.value.length<3){
msg.innerHTML="the fullname is not valid";
fullN.style.background='lightgray'
fullN.focus()
}else{
    msg.innerHTML="";
    fullN.style.background='white'
}}

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
function validateForm(event){
    
    let pass=document.getElementById("pass").value;
    let rpass=document.getElementById("rpass").value;
let fullName=document.getElementById("fullN").value;
if(fullName.length<3 || pass !== rpass  ){
  alert("Plz correct the validation errors first.");
  event.preventDefault();
}
}