var CaptchaValue="";
function GenerateAlphaNumeric(){
   var AlphaNumericChar=Math.ceil(Math.random()*35);
   return AlphaNumericChar;
}

function GetSize(){
   var Size=Math.ceil(Math.random()*5);
   return Size;
}

function GetFamily(){
   var Family=Math.ceil(Math.random()*4);
   return Family;
}

function GetStyle(){
   var Family=Math.ceil(Math.random()*2);
   return Family;
}

function ValidateCaptcha(){
    var InputValue=document.getElementById("CaptchaBox").value;
    if(InputValue.localeCompare(CaptchaValue)!=0){
        document.getElementById("CaptchaText").innerHTML="Captcha doesn't match";
    }
    else{
        document.getElementById("CaptchaText").innerHTML="";
    }
}
function GenerateCaptcha() {
    var text=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
    var Canvas = document.getElementById("myCanvas");
    var Context = Canvas.getContext("2d");
    Context.clearRect(0, 0, Canvas.width, Canvas.height);
    var first=text[GenerateAlphaNumeric()];
    var second=text[GenerateAlphaNumeric()];
    var third=text[GenerateAlphaNumeric()];
    var fourth=text[GenerateAlphaNumeric()];
    var fifth=text[GenerateAlphaNumeric()];
    var CaptchaString=first+second+third+fourth+fifth;
    CaptchaValue=CaptchaString;
    var Families=new Array("Arial","Courier New","Times New Roman","Comic Sans MS","Arial");
    var Sizes=new Array("40px","20px","30px","25px","35px","40px");
    var Styles=new Array("","italic","normal");
    Context.font = Styles[GetStyle()]+" "+Sizes[GetSize()]+" "+Families[GetFamily()];
    Context.fillText(first,20,35);
    Context.font = Styles[GetStyle()]+" "+Sizes[GetSize()]+" "+Families[GetFamily()];
    Context.fillText(second,35,35);
    Context.font = Styles[GetStyle()]+" "+Sizes[GetSize()]+" "+Families[GetFamily()];
    Context.fillText(third,50,35);
    Context.font = Styles[GetStyle()]+" "+Sizes[GetSize()]+" "+Families[GetFamily()];
    Context.fillText(fourth,75,35);
    Context.font = Styles[GetStyle()]+" "+Sizes[GetSize()]+" "+Families[GetFamily()];
    Context.fillText(fifth,90,35);
}
