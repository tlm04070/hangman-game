


//possible words for the game to choose

var word = ['Arizona Cardinals',
	'Chicago Bears',
	'Green Bay Packers',
	'New York Giants',
	'Detroit Lions',
	'Washington Redskins',
	'Philadelphia Eagles',
	'Pittsburgh Steelers',
	'Los Angeles Rams',
	'Cleveland Browns',
	'Indianapolis Colts',
	'Dallas Cowboys',
	'Kansas City Chiefs',
	'Los Angeles Chargers',
	'Denver Broncos',
	'New York Jets',
	'New England Patriots',
	'Oakland Raiders',
	'Tennessee Titans',
	'Buffalo Bills',
	'Minnesota Vikings',
	'Atlanta Falcons',
	'Miami Dolphins',
	'New Orleans Saints',
	'Cincinnati Bengals',
	'Seattle Seahawks',
	'Tampa Bay Buccaneers',
	'Carolina Panthers',
	'Jacksonville Jaguars',
	'Baltimore Ravens',
	'Houston Texans'
];

//basic variables for the game to use
var userKey;

//win counter
var wins = 0;

//total guesses 
var guesses = 6;

//the random word picked from the starting array
var picked = word[Math.floor(Math.random() * word.length)].toUpperCase();

//empty array for underscores to populate 
var answerArray = [];
for (i = 0; i < picked.length; i++) {
	answerArray.push("__");
}



console.log("Current word is: " + picked);



printBoard();

//replacing the underscores with correctly guessed letters
var correctBool = false;
document.onkeyup = function (event) {
	var temp = event.key;
	userKey = temp.toUpperCase();

	console.log(userKey);
	console.log(picked);


	for (var i = 0; i < picked.length; i++) {
		if (userKey === picked[i]) {
			answerArray[i] = userKey;
			printBoard();
			correctBool = true;

		}
	}
	if (correctBool === false) {
		decreaseGuesses();
		wrong();

	}


	correctBool = false;
}


	


function wins() {
	wins++;

}

document.getElementById("wins").innerHTML = wins;



//getting rid of the period inbetween underscores
function printBoard() {
	document.getElementById("current").innerHTML = answerArray.join(" ");
	

}


//when user loses
var gameOver = "Close, but the word was " + picked + ".";

function decreaseGuesses() {
	guesses--;
	document.getElementById("guesses").innerHTML = guesses;
	if (guesses === 0) {
		alert(gameOver);
		alert("Try again!");
		document.location.reload(true);

	}

}

//adds the user key to the collection of missed chars
function wrong() {
	
	$("#wrong").append(userKey + " ");
}


