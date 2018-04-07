// To be fixed
    //Do I need to add a variable to the $("totalBox").push(userNum);


//Variables
var redNumGen = Math.floor(Math.random() * 20 + 1);
var yellowNumGen = Math.floor(Math.random() * 20 + 1);
var blueNumGen = Math.floor(Math.random() * 20 + 1);
var greenNumGen = Math.floor(Math.random() * 20 + 1);
var trgtGen = Math.floor(Math.random() * 175 + 30);
var wins = 0;
var losses = 0;
var userNum = 0;

//onclick()
document.onclick = function(userInput) {
// jQuery .onClick events & functions
//If Red Crystal Clicked
$("#redCrystal").on("click", function() {
    //generate red cystal number
    //Add Random number for red to 
    userNum + redNumGen;
    console.log(userNum);
    console.log(redNumGen);
    //If userNum is equal to target
    if (userNum === trgtGen) {
        //alert win 
        alert("Hooray you won!");
        //wins goes up
        wins++;
        //Select new red crystal number
        var redNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        var trgtGen = Math.floor(Math.random() * 175 + 30);
    }
    //If userNum is larger than  
    else if (userNum > trgtGen) {
         //loss goes up
         losses++;
         //alert loss
         alert("Sorry, you lost :(");
         //Select new red crystal number
         var redNumGen = Math.floor(Math.random() * 20 + 1);
         //Select new target
         var trgtGen = Math.floor(Math.random() * 175 + 30);   
    }
    //Push new userNum to users total
    else  {
        $("totalBox").push(userNum);
    }
}),
//If Red Crystal Clicked
$("#blueCrystal").on("click", function() {
    //Functions
    //Add Random number for blue to userNum
    userNum + blueNumGen;
    //If userNum is equal to target
    if (userNum === trgtGen) {
        //alert win 
        alert("Hooray you won!");
        //wins goes up
        wins++;
        //Select new red crystal number
        var blueNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        var trgtGen = Math.floor(Math.random() * 175 + 30);
    }
    //If userNum is larger than  
    else if (userNum > trgtGen) {
         //loss goes up
         losses++;
         //alert loss
         alert("Sorry, you lost :(");
         //Select new red crystal number
         var blueNumGen = Math.floor(Math.random() * 20 + 1);
         //Select new target
         var trgtGen = Math.floor(Math.random() * 175 + 30);  
    }
    //Add new userNum to users total
    else {
        $("totalBox").push(userNum);
    }
}),
//If Red Crystal Clicked
$("#greenCrystal").on("click", function() {
    //Functions
    //Add Random number for green to userNum
    userNum + greenNumGen;
    //If userNum is equal to target
    if (userNum === trgtGen) {
        //alert win 
        alert("Hooray you won!");
        //wins goes up
        wins++;
        //Select new red crystal number
        var greenNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        var trgtGen = Math.floor(Math.random() * 175 + 30);
    }
    //If userNum is larger than  
    else if (userNum > trgtGen) {
         //loss goes up
         losses++;
         //alert loss
         alert("Sorry, you lost :(");
         //Select new red crystal number
         var greenNumGen = Math.floor(Math.random() * 20 + 1);
         //Select new target
         var trgtGen = Math.floor(Math.random() * 175 + 30);  
    }
    //Add new userNum to users total
    else {
        $("totalBox").push(userNum);
    }
}),
//If Red Crystal Clicked
$("#yellowCrystal").on("click", function() {
    //Add Random number for yellow to userNum
    userNum + yellowNumGen;
    //If userNum is equal to target
    if (userNum === trgtGen) {
        //alert win 
        alert("Hooray you won!");
        //wins goes up
        wins++;
        //Select new red crystal number
        var yellowNumGen = Math.floor(Math.random() * 20 + 1);
        //Select new target
        var trgtGen = Math.floor(Math.random() * 175 + 30);
    }
    //If userNum is larger than  
    else if (userNum > trgtGen) {
         //loss goes up
         losses++;
         //alert loss
         alert("Sorry, you lost :(");
         //Select new red crystal number
         var yellowNumGen = Math.floor(Math.random() * 20 + 1);
         //Select new target
         var trgtGen = Math.floor(Math.random() * 175 + 30); 
    }
    //Add new userNum to users total
    else {
        $("totalBox").push(userNum);
    }
})

//html
$("#number").html(trgtGen); 
// $("#number").text(trgtGen);
// $("#number").append(trgtGen);
$("#totalBox").html(userNum);
$("#scoreLossText").html("Losses: " + losses);
$("#scoreWinText").html("Wins: " + wins);
$("#redCrystal").html(redNumGen);
$("#blueCrystal").html(blueNumGen);
$("#greenCrystal").html(greenNumGen);
$("#yellowCrystal").html(yellowNumGen);
};

