
var redNumGen = Math.floor(Math.random() * 20 + 1);
var yellowNumGen = Math.floor(Math.random() * 20 + 1);
var blueNumGen = Math.floor(Math.random() * 20 + 1);
var greenNumGen = Math.floor(Math.random() * 20 + 1);
var trgtGen = Math.floor(Math.random() * 175 + 30);
var wins = 0;
var losses = 0;
var userNum = 0;

function win() {
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        userNum = 0;
        $("#totalBox").html(userNum);
}
function lose() {
        window.losses++;
        $("#scoreLossText").html("Losses: " + losses);
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        window.trgtGen = Math.floor(Math.random() * 175 + 30);  
        $("#number").html(trgtGen); 
        userNum = 0;
        $("#totalBox").html(userNum);
}

$(document).ready(function() {

$(document).on("click", function() {
    if (userNum === window.trgtGen) {
        win();
    }
    else if (userNum > window.trgtGen) {
       lose();
    }
  })

  $("#redCrystal").on("click", function() {
      userNum += window.redNumGen;
      $("#totalBox").html(userNum);
  })

  $("#blueCrystal").on("click", function() {
      userNum += window.blueNumGen;
      $("#totalBox").html(userNum);
  })

  $("#greenCrystal").on("click", function() {
      userNum += window.greenNumGen;
      $("#totalBox").html(userNum);
  })

  $("#yellowCrystal").on("click", function() {
      userNum += window.yellowNumGen;
      $("#totalBox").html(userNum);
  })

$("#number").html(trgtGen); 
$("#scoreLossText").html("Losses: " + losses);
$("#scoreWinText").html("Wins: " + wins);
$("#redCrystal").html(redNumGen);
$("#blueCrystal").html(blueNumGen);
$("#greenCrystal").html(greenNumGen);
$("#yellowCrystal").html(yellowNumGen);
});