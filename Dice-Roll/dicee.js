const diceSize = 6;

function getRandomNum(n)
{
    return Math.floor(Math.random() * n) + 1;
}

function refreshPage()
{
    location.reload();
}

// Get images elements
firstDice = document.getElementsByTagName("img")[0];
secondDice = document.getElementsByTagName("img")[1];

// Get random numbers for dice
firstDiceNum = getRandomNum(diceSize);
secondDiceNum = getRandomNum(diceSize);

// Set images src attribute to current random dice image
firstDice.setAttribute("src", "images/dice" + firstDiceNum + ".png");
secondDice.setAttribute("src", "images/dice" + secondDiceNum + ".png");

// See who wins
if (firstDiceNum > secondDiceNum)
    document.querySelector("h1").textContent = "Player 1 wins!! :)";
else if (secondDiceNum > firstDiceNum)
    document.querySelector("h1").textContent = "Player 2 wins!! :)";
else
    document.querySelector("h1").textContent = "It's a tie :0";