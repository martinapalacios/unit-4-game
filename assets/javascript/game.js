// Java Script for Cystals Game

$(document).ready(function() {

// Variables
let wins = 0;
let losses = 0;
let computerNum = [];
let emeraldNum;
let quartzNum;
let sapphireNum;
let purpleNum;
let playerCounter = 0;

// Start the game
function startGame() {
	let compNum = Math.floor(Math.random() * 102) + 19;
	computerNum.push(compNum);
	$("#random-number").text(computerNum[0]);

    // Random number for crystals
    emeraldNum = Math.floor(Math.random() * 12) + 1;

    quartzNum = Math.floor(Math.random() * 12) + 1;

    sapphireNum = Math.floor(Math.random() * 12) + 1;

    purpleNum = Math.floor(Math.random() * 12) + 1;

};

// Reset the game
function nextGame() {
	computerNum.length = 0;
	playerCounter = 0;
	startGame();
};

// Function
function checkingNum () {
	if (playerCounter === computerNum[0]) {
		wins++;
		$("#outcome").html("You won!");
		$("#wins").html("Wins: "+ wins);
		nextGame();
	}

	else if (playerCounter > computerNum[0]) {
		losses++;
		$("#outcome").html("You lost!");
		$("#loss").html("Losses: " + losses);
		nextGame();
	}

};

// Start the game
startGame();

// Clicking crystals
$("#emerald").on("click", function() {
	playerCounter = emeraldNum + playerCounter;
	$("#scorecount").text(playerCounter);
	checkingNum();
});

$("#quartz").on("click", function() {
	playerCounter = quartzNum + playerCounter;
	$("#scorecount").text(playerCounter);
	checkingNum();
});

$("#sapphire").on("click", function() {
	playerCounter = sapphireNum + playerCounter;
	$("#scorecount").text(playerCounter);
	checkingNum();
});

$("#purple").on("click", function() {
	playerCounter = purpleNum + playerCounter;
	$("#scorecount").text(playerCounter);
	checkingNum();
});

});