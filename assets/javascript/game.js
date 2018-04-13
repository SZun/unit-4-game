//Reset Functions
function reset() {
    window.redNumGen = Math.floor(Math.random() * 12) + 1;
    window.yellowNumGen = Math.floor(Math.random() * 12) + 1;
    window.blueNumGen = Math.floor(Math.random() * 12) + 1;
    window.greenNumGen = Math.floor(Math.random() * 12) + 1;
    window.trgtGen = Math.floor(Math.random() * ((120-19)+1) + 19);
    $("#trgt").html("Target <br>" + trgtGen); 
    window.userNum = 0;
    $("#total").html("Total <br>" + userNum);              
}
//Variables/JQuery Functions
$(document).ready(function() {
reset();    
var wins = 0;
var losses = 0;
console.log(redNumGen,blueNumGen,greenNumGen,yellowNumGen)
$(document).on("click", function() {
$("#winLossText").html();
if (userNum === window.trgtGen) {
    reset();
    wins++;
    $("#win").html("Wins: " + wins);
}
else if (userNum > window.trgtGen) {
    reset();
   losses++;
    $("#loss").html("Losses: " + losses);
}
})

$("#red").on("click", function() {
  userNum += window.redNumGen;
  $("#total").html("Total <br>" + userNum);
})

$("#blue").on("click", function() {
  userNum += window.blueNumGen;
  $("#total").html("Total <br>" + userNum);
})

$("#green").on("click", function() {
  userNum += window.greenNumGen;
  $("#total").html("Total <br>" + userNum);
})

$("#yellow").on("click", function() {
  userNum += window.yellowNumGen;
  $("#total").html("Total <br>" + userNum);
})
//html
$("#loss").html("Losses: " + losses);
$("#win").html("Wins: " + wins);
});