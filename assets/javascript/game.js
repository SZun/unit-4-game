//Functions
function reset() {
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        window.userNum = 0;
        $("#totalBox").html(userNum);
}
//Variables/JQuery Functions
$(document).ready(function() {
    reset();    
    var wins = 0;
    var losses = 0;
$(document).on("click", function() {
    if (userNum === window.trgtGen) {
        reset();
        wins++;
        $("#scoreWinText").html("Wins: " + wins);
    }
    else if (userNum > window.trgtGen) {
        reset();
       losses++;
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
//html
$("#number").html(trgtGen); 
$("#scoreLossText").html("Losses: " + losses);
$("#scoreWinText").html("Wins: " + wins);
});