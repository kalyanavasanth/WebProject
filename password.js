function TestStrength(){
var Canvas=document.getElementById("MyCanvas");
var Context=Canvas.getContext("2d");
var strength=0;
    
var pwd=document.getElementById("password").value;
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
    if(/[@#$%]/.test(pwd)){
        strength+=25;
        SetStyle(Context,strength);
        Context.clearRect(0,0,Canvas.width,Canvas.height);
        Context.fillRect(0,0,strength,Canvas.height);
    }
    if(pwd==""){
        Context.clearRect(0,0,Canvas.width,Canvas.height);
        strength=0;
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
    document.getElementById("match").innerHTML="Passwords Match";    
    }
    else{
        document.getElementById("match").innerHTML="Passwords do not Match";
    }
}