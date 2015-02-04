function GenerateAlphaNumeric(){
   var AlphaNumericChar=Math.ceil(Math.random()*35);
   return AlphaNumericChar;
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
    Context.font = "40px Courier New";
    Context.fillText(CaptchaString,20,35);
}