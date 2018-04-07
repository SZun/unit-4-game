// To be fixed
//make js logic functions, and separate them from the jquery
var redNumGen = Math.floor(Math.random() * 20 + 1);
var yellowNumGen = Math.floor(Math.random() * 20 + 1);
var blueNumGen = Math.floor(Math.random() * 20 + 1);
var greenNumGen = Math.floor(Math.random() * 20 + 1);
var trgtGen = Math.floor(Math.random() * 175 + 30);
var wins = 0;
var losses = 0;
var userNum = 0;

//Start the script
$(document).ready(function() {
//Variables

// jQuery .onClick events & functions

//If Red Crystal Clicked
$("#redCrystal").on("click", function() {
    //Add Random number for red to 
    userNum += window.redNumGen;
    //If userNum is equal to target
    if (userNum === window.trgtGen) {
        //alert win 
        // alert("Hooray you won!");
        //wins goes up
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        //reset userNum
       userNum = 0;
       $("#totalBox").html(userNum);
    }
    //If userNum is larger than  
    else if (userNum > window.trgtGen) {
         //loss goes up
         window.losses++;
         $("#scoreLossText").html("Losses: " + losses);
         //alert loss
        //  alert("Sorry, you lost :(");
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);   
        $("#number").html(trgtGen); 
         //reset userNum
         userNum = 0;
         $("#totalBox").html(userNum);
    }
    //Push new userNum to users total
    else  {
        $("#totalBox").html(userNum);
    }
})
//If Red Crystal Clicked
$("#blueCrystal").on("click", function() {
    //Add Random number for red to 
    userNum += window.blueNumGen;
    //If userNum is equal to target
    if (userNum === window.trgtGen) {
        //alert win 
        // alert("Hooray you won!");
        //wins goes up
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        //reset userNum
        userNum = 0;
        $("#totalBox").html(userNum);
    }
    //If userNum is larger than  
    else if (userNum > window.trgtGen) {
         //loss goes up
         window.losses++;
         $("#scoreLossText").html("Losses: " + losses);
         //alert loss
        //  alert("Sorry, you lost :(");
         //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);  
        $("#number").html(trgtGen); 
         //reset userNum
         userNum = 0;
         $("#totalBox").html(userNum);
    }
    //Push new userNum to users total
    else  {
        // $("totalBox").push(userNum + redNumGen);
        $("#totalBox").html(userNum);
    }
})
//If Red Crystal Clicked
$("#greenCrystal").on("click", function() {
    //Add Random number for red to 
    userNum += window.greenNumGen;
    //If userNum is equal to target
    if (userNum === window.trgtGen) {
        //alert win 
        // alert("Hooray you won!");
        //wins goes up
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        //reset userNum
        userNum = 0;
        $("#totalBox").html(userNum);
    }
    //If userNum is larger than  
    else if (userNum > window.trgtGen) {
         //loss goes up
         window.losses++;
         $("#scoreLossText").html("Losses: " + losses);
         //alert loss
        //  alert("Sorry, you lost :(");
         //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30); 
        $("#number").html(trgtGen); 
         //reset userNum
         userNum = 0;
         $("#totalBox").html(userNum);
    }
    //Push new userNum to users total
    else  {
        // $("totalBox").push(userNum + redNumGen);
        $("#totalBox").html(userNum);
    }
})
$("#yellowCrystal").on("click", function() {
    //Add Random number for red to 
    userNum += window.yellowNumGen;
    //If userNum is equal to target
    if (userNum === window.trgtGen) {
        //alert win 
        // alert("Hooray you won!");
        //wins goes up
        window.wins++;
        $("#scoreWinText").html("Wins: " + wins);
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);
        $("#number").html(trgtGen); 
        //reset userNum
        userNum = 0;
        $("#totalBox").html(userNum);
    }
    //If userNum is larger than  
    else if (userNum > window.trgtGen) {
         //loss goes up
         window.losses++;
         $("#scoreLossText").html("Losses: " + losses);
         console.log(losses)
         //alert loss
        //  alert("Sorry, you lost :(");
        //Select new crystal numbers
        window.redNumGen = Math.floor(Math.random() * 20 + 1);
        window.yellowNumGen = Math.floor(Math.random() * 20 + 1);
        window.blueNumGen = Math.floor(Math.random() * 20 + 1);
        window.greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        window.trgtGen = Math.floor(Math.random() * 175 + 30);  
        $("#number").html(trgtGen); 
         //reset userNum
         userNum = 0;
         $("#totalBox").html(userNum);
    }
    //Push new userNum to users total
    else  {
        // $("totalBox").push(userNum + redNumGen);
        $("#totalBox").html(userNum);
    }
})

//html
$("#number").html(trgtGen); 
$("#scoreLossText").html("Losses: " + losses);
$("#scoreWinText").html("Wins: " + wins);
$("#redCrystal").html(redNumGen);
$("#blueCrystal").html(blueNumGen);
$("#greenCrystal").html(greenNumGen);
$("#yellowCrystal").html(yellowNumGen);
});