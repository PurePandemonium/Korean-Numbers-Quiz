 $( document ).ready(function() {
  Initialize();
});
 
 
 function ShowAnswer() {
 
    
    $("#answer").show();
    $("#showAnswer").hide();
 }
 
 
 
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function NewNumber() {
    var num = rollNumber();
    var hangul = numberToHangul(num);
    
    
    $("#prompt").text(num);
    $("#answer").text(hangul);
    
    Initialize();
    $("#answer").hide();
    $("#showAnswer").show();
    
    
    

}

function Initialize(){
    $("#answer").hide();
    $("#showAnswer").show();
    
}

function rollNumber() {
    // different numbers based on difficulty chosen
    var r = getRandomInt(0, 10);
    return r;
}

function numberToHangul(num) {
    var difficulty = $('input[name=difficulty]:checked', '#myForm').val();
    var text = "";
    switch(num) {
    case 0:
        text = "제로";
        break;
    case 1:
        text = "일";
        break;
    case 2: 
        text = "이";
        break;
    case 3:
        text = "삼";
        break;
    case 4:
        text = "사";
        break;
    case 5:
        text = "오";
        break;
    case 6:
        text = "육";
        break;
    case 7:
        text = "칠";
        break;
    case 8:
        text = "팔";
        break;
    case 9:
        text = "구";
        break;
    case 10:
        text = "십";
        break;
    
    default:
        text = "error";
    } //switch
    
    return text;
}