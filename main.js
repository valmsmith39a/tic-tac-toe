'use strict';

$(document).ready(init);

// Global variables 
var $startPlayerButton = $();
var $displayStartingPlayer = $(); 
var toggleG = 0;  // Player X: -1, Player O: 1
var arrayOfSquaresG = [];
var startedFlagG = false; 

function init() {
	setUpGame();
}

function setUpGame() {

	$startPlayerButton = $('<div>').attr('id','startPlayerButton').text('Who starts? Click!');
    $displayStartingPlayer = $('<div>').attr('id', 'displayPlayerBox'); 
    
    // Determine starting player 

    $('.main-container').prepend($startPlayerButton);
	$('#startPlayerButton').click(startPlayerButtonClicked);
	

    // Set up squares 

	for(var i = 0; i < 9; i++) {
    	var $squares = $('<div>').addClass('squares').data('player', 0);
    	arrayOfSquaresG.push($squares);
    }

    $('.main-container').append(arrayOfSquaresG);
    $('.squares').click(squareClicked);
}

function startPlayerButtonClicked() {
   // Generate either 1 or 0 
   var coinFlip = Math.round(Math.random()*1);

   $('.main-container').prepend($displayStartingPlayer)

   if(coinFlip === 0) {
   	   toggleG = -1; 
       $displayStartingPlayer.text('Player X starts!');
   }
   else {
   		toggleG = 1;
   	   $displayStartingPlayer.text('Player O starts!');
   }
   $('.main-container').find('#startPlayerButton').hide();

   startedFlagG = true;  // Allow game to start 
}

function squareClicked() {

	if(startedFlagG === true) {

		var $this = $(this)

		if(toggleG === -1){
			$this.text('X');
		 	$this.data('player', -1);
		 	toggleG = 1; // Player O's turn 
		 	$displayStartingPlayer.text('Player O\'s turn!');
	    }
	    else {
	    	$this.text('O');
	    	$this.data('player', 1);
	    	toggleG = -1;  // Player X's turn 
	    	$displayStartingPlayer.text('Player X\'s turn!');
	    }

	    checkIfWin(); 
	}
}

function checkIfWin(){

	var sq0 = arrayOfSquaresG[0].data('player');
	var sq1 = arrayOfSquaresG[1].data('player');
	var sq2 = arrayOfSquaresG[2].data('player');
	var sq3 = arrayOfSquaresG[3].data('player');
	var sq4 = arrayOfSquaresG[4].data('player');
	var sq5 = arrayOfSquaresG[5].data('player');
	var sq6 = arrayOfSquaresG[6].data('player');
	var sq7 = arrayOfSquaresG[7].data('player');
	var sq8 = arrayOfSquaresG[8].data('player');

    var win1 = sq0 + sq1 + sq2; 
    var win2 = sq3 + sq4 + sq5; 
    var win3 = sq6 + sq7 + sq8; 
    var win4 = sq0 + sq3 + sq6; 
    var win5 = sq1 + sq4 + sq7; 
    var win6 = sq2 + sq5 + sq8; 
    var win7 = sq2 + sq4 + sq6; 
    var win8 = sq0 + sq4 + sq8; 

	if(win1 === 3 || win1 === -3) {
		winEvent(win1 === 3  ? 1:-1);
		return; 
	}
	else if(win2 === 3 || win2 === -3) {
		winEvent(win2 === 3 ? 1:-1);
		return; 
	}
	else if(win3 === 3 || win3 === -3) {
		winEvent(win3 === 3 ? 1:-1);
		return; 
	} 
	else if(win4 === 3 || win4 === -3) {
		winEvent(win4 === 3 ? 1:-1);
		return; 
	}
	else if(win5 === 3 || win5 === -3) {
		winEvent(win5 === 3 ? 1:-1);
		return; 
	}
	else if(win6 === 3 || win6 === -3) {
		winEvent(win6 === 3 ? 1:-1);
		return; 
	} 
	else if(win7 === 3 || win7 === -3) {
		winEvent(win7 === 3 ? 1:-1);
		return; 
	}
	else if(win8 === 3 || win8 === -3) {
		winEvent(win8 === 3 ? 1:-1);
		return; 
	}
    
    var squaresFilledCounter = 0; 

    for(var i = 0; i < 9; i++){

    	if(arrayOfSquaresG[i].data('player') === 1 || arrayOfSquaresG[i].data('player') === -1) {
        	squaresFilledCounter++;
    	}
    }

    if(squaresFilledCounter === 9) {
    	alert('Nobody won');
    }
}

function winEvent(winner) {

    if(winner === -1){
    	alert('Player X wins!!!');
    }
    else {
    	alert('Player O wins!!!');
    }
}