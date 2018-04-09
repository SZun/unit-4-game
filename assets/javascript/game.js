//Reset Functions
function reset() {
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html("Target <br>" + trgtGen); 
        window.userNum = 0;
        $("#totalNumber").html("Total <br>" + userNum);   
}
//Variables/JQuery Functions
$(document).ready(function() {
    reset();    
    var wins = 0;
    var losses = 0;
$(document).on("click", function() {
    $("#winLossText").html();
    if (userNum === window.trgtGen) {
        reset();
        wins++;
        $("#scoreWinText").html("Wins: " + wins);
        $("#winLossText").html("Winner!!!").addClass("winner");
        $("#winLossBackup").html("Winner").addClass("winnerBackup");   
        
    }
    else if (userNum > window.trgtGen) {
        reset();
       losses++;
        $("#scoreLossText").html("Losses: " + losses);
        $("#winLossText").html("You Lost :(").addClass("loser");
        $("#winLossBackup").html("Lost").addClass("loserBackup");
    }
    else {
        $("#winLossText").html("").removeClass("winner loser")
        $("#winLossBackup").html("").removeClass("winnerBackup loserBackup")
    }
  })

  $("#redCrystal").on("click", function() {
      userNum += window.redNumGen;
      $("#totalNumber").html("Total <br>" + userNum);
  })

  $("#blueCrystal").on("click", function() {
      userNum += window.blueNumGen;
      $("#totalNumber").html("Total <br>" + userNum);
  })

  $("#greenCrystal").on("click", function() {
      userNum += window.greenNumGen;
      $("#totalNumber").html("Total <br>" + userNum);
  })

  $("#yellowCrystal").on("click", function() {
      userNum += window.yellowNumGen;
      $("#totalNumber").html("Total <br>" + userNum);
  })
//html
$("#scoreLossText").html("Losses: " + losses);
$("#scoreWinText").html("Wins: " + wins);
});