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

var userKey;




var picked = word[Math.floor(Math.random() * word.length)].toUpperCase();


var answerArray = [];



console.log("Current word is: " + picked);


for (i = 0; i < picked.length; i++) {
	answerArray.push("__");
}

printBoard();


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
	if (correctBool === false){
		decreaseGuesses();
		wrong();

	}

	correctBool = false;
}
 





var wins = 0;
document.getElementById("wins").innerHTML = wins;



function printBoard() {
document.getElementById("current").innerHTML = answerArray.join(" ");


}




var guesses = 6;

function decreaseGuesses(){
	guesses--;
document.getElementById("guesses").innerHTML = guesses;
}




function wrong(){
// 	var temp = document.createElement("li");
// 	var fill = document.createTextNode(userKey)
// 	temp.appendChild(fill);
// 	var currentDiv = document.getElementById("wrong");
// document.body.insertBefore(temp, currentDiv);

$("#wrong").append(userKey + " ");
}