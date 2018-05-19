# unit-4-game

Link to deployed version: https://szun.github.io/unit-4-game/


Problem: Create a game that adheared to the following instructions: 
"You will be given a random number at the start of the game.
There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.
You win the game by matching your total score to random number, you loose the game if your ottal score goes above the random number.
The value of each crystal is hidden from you until you click on it.
Each time when the game starts, the game will change the values of each crystal"

Solution: To create the number that the user was aiming towards, I created a variable that was set to a Math.floor(Math.random() * highestNumber - minumumNumber) + minumumNumber that would be set every time the page was loaded or the user had won/lost. I created a similar variable for each of the crystals, giving them separate values. I also created on click functions referencing their id's which would add their value to the users current score (which they had to match to the number given as the objective). When the user won/lost, I increased their wins/losses by one by setting their wins/losses as variables equal to zero and having them increment positively by one ex. wins++ || losses++, and then outputing that new score when they had surpassed the objective number or met it by evaluating if the numbers were equal. I also reset all the numbers, including the values of the crystals when the user had won, lost, or reset the page. 

Technical Approach: Using the education I have garnered from Northwestern University's Full Stack Web Development program, and more specifically with HTML5, CSS3, Bootstrap 4, Javascript ES5, and jQuery, I was able to complete a quality version of this assigment.
