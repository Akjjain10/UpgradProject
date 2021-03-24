function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function namecheck(){
    var namec=document.getElementById('name').value;
    var len=namec.length;
    if(len<3)
    {
        alert("Name should be of minimum 3 Length");
    }
}

function numberCheck(){
    var x=document.getElementById('number').value;
    var len=x.length;
    if(len<10 && len>10)
    {
        alert("sfe");
    }
}

function load() {
    document.getElementById('show').style.display="none";
  }

function required()
{
var namec = document.getElementById('name').value;
var emailc=document.getElementById('email').value;
var numberc=document.getElementById('number').value;
if (namec==="")
{
alert("Please Enter your name");
}
else if(numberc==="")
{
    alert("Please Enter your Number");
}
else if(emailc==="")
{
    alert("Please Enter your Email");
}
else{
    var div=document.getElementById('show');
    div.style.display=inline;
    var x=document.createElement("div");
}
}