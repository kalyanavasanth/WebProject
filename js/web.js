var isName=0;
var isEmail=0;
var isCemail=0;
var isUname=0;
var isPassword=0;
var isConfirmPass=0;


function validateEmail()
{
	var obj = document.getElementById("email").value;
	if(/^[^0-9][a-z0-9]+\w?[a-z0-9]+@[a-z0-9]+-?[a-z0-9]+\.[a-z]{2,3}$/i.test(obj))
	{
		document.getElementById("mail").setAttribute("class","glyphicon glyphicon-thumbs-up");
		document.getElementById("email1").disabled=false;
		isEmail=1;
	}
	else
	{
       document.getElementById("mail").setAttribute("class","glyphicon glyphicon-remove");	
       document.getElementById("email1").disabled=true;
       isEmail=0;
}
}


function validateConfirmEmail()
{
	var obj = document.getElementById("email").value;
	var txt = document.getElementById("email1").value;
	if(txt==obj)
	{
		
		document.getElementById("mail@").setAttribute("class","glyphicon glyphicon-thumbs-up");
		document.getElementById("mail@1").innerHTML="";
		isCemail =1;
	}
	else
	{
		document.getElementById("mail@1").innerHTML="Enter same Email";
		document.getElementById("mail@").setAttribute("class","text-danger");
		isCemail=0;
	}
}

function validateName()
{
	var obj = document.getElementById("name").value;
	if(/^[a-z\s]{3,15}$/i.test(obj))
	{
		document.getElementById("name1").setAttribute("class","glyphicon glyphicon-thumbs-up");

		isName=1;
	}
	else
	{ 
		isName=0;
document.getElementById("name1").setAttribute("class","glyphicon glyphicon-remove");	
}
}

function validateUsername()
{
	var obj = document.getElementById("uname").value;
	if(/^[a-z0-9][a-z0-9_@]{4,15}$/i.test(obj))
	{
		document.getElementById("name2").setAttribute("class","glyphicon glyphicon-thumbs-up");
		isUname=1;
	}
	else
	{
		isUname =0;
document.getElementById("name2").setAttribute("class","glyphicon glyphicon-remove");	
}
}

//password match
function TestStrength(){
var Canvas=document.getElementById("MyCanvas");
var Context=Canvas.getContext("2d");
var strength=0;
    
var pwd=document.getElementById("password").value;

if(pwd.length<5){
document.getElementById("match").innerHTML="Password has less than 5 characters";
 document.getElementById("passwordRepeat").disabled = true;
}
else{
 document.getElementById("passwordRepeat").disabled = false;
    if(/[a-z]/.test(pwd)){
        strength+=25;
        SetStyle(Context,strength);
Context.clearRect(0,0,Canvas.width,Canvas.height);
Context.fillRect(0,0,strength,Canvas.height);
    }
    if(/[A-Z]/.test(pwd)){
        strength+=25;
        SetStyle(Context,strength);
        Context.clearRect(0,0,Canvas.width,Canvas.height);
Context.fillRect(0,0,strength,Canvas.height);
    }
    if(/[0-9]/.test(pwd)){
        strength+=25;
        SetStyle(Context,strength);
        Context.clearRect(0,0,Canvas.width,Canvas.height);
        Context.fillRect(0,0,strength,Canvas.height);
    }
    if(/[@#$%_]/.test(pwd)){
        strength+=25;
        SetStyle(Context,strength);
        Context.clearRect(0,0,Canvas.width,Canvas.height);
        Context.fillRect(0,0,strength,Canvas.height);
    }
    if(pwd==""){
        Context.clearRect(0,0,Canvas.width,Canvas.height);
        strength=0;
    }
if(/[~!\^&*()-+=><?\/.,"';:|{}\[\]`]/.test(pwd)){
 document.getElementById("match").innerHTML="Password has invalid characters";
 document.getElementById("passwordRepeat").disabled = true;

    }
else{
document.getElementById("match").innerHTML="";
 document.getElementById("passwordRepeat").disabled = false;
}
}
}
   
   function SetStyle(context,strength){
       var value=strength;
       if(value<=25){
    context.fillStyle="#FF0000";
       }
       else if(value>25 && value<=50){
        context.fillStyle="#FFA500";
       }
       else if(value>50 && value<=75){
           context.fillStyle="#7EC0EE";
       }
       else{
           context.fillStyle="#008000";
       }
}

function MatchPassword(){
    var pwd1=document.getElementById("password").value;
    var pwd2=document.getElementById("passwordRepeat").value;
    if(pwd1.localeCompare(pwd2)==0){
    document.getElementById("match").setAttribute("class","text-success");
    document.getElementById("match").innerHTML="Passwords Match";  
    isPassword=1;  
    }
    else{
    	isPassword=0;
    	document.getElementById("match").setAttribute("class","text-danger");
        document.getElementById("match").innerHTML="Passwords do not Match";
    }
}


$(document).ready(function(){
	$("#password").focus(function(){
	$("#pasinfo").html("@ # $ _ are the only valid characters");
	});
	
	$("#password").blur(function(){
	$("#pasinfo").html("");
	});
    $("input").blur(function(){
     var total=0;
     if(isName==1)
     total = total+1;
     if(isUname==1)
     total = total+1;
     if(isEmail==1)
     total = total+1;
     if(isCemail==1)
     total = total+1;
     if(isPassword==1)
     total = total+1;
     
     $("#pbar").innerWidth(total * 72);
     $("#pbar").html(function(){
     	if(total==5)
     	return "completed";
     	else
     	return total*20 +"%";
     });
      
      
      
    });
});
