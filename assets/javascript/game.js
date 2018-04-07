var redNumGen = Math.floor(Math.random() * 20 + 1);
var yellowNumGen = Math.floor(Math.random() * 20 + 1);
var blueNumGen = Math.floor(Math.random() * 20 + 1);
var greenNumGen = Math.floor(Math.random() * 20 + 1);
var trgtGen = Math.floor(Math.random() * 175 + 30);
var wins = 0;
var losses = 0;
var userNum = 0;

function winOrLoss() {
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
        winOrLoss();
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
    }
    else if (userNum > window.trgtGen) {
       winOrLoss();
       window.losses++;
        $("#scoreLossText").html("Losses: " + losses);
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
});