'use strict';

$(document).ready(init);

function init() {

// var $testDiv = $('<div id=\'testDiv\'>TEST</div>');

// $('body').append('<div id=\'testDiv\'>hello world</div>');

setUpGame();

}

function setUpGame() {
    
	console.log('set up game');
    
    var arrayOfSquares = [];

    for(var i = 0; i < 9; i++) {
    	var $squares = $('<div>').addClass('squares').data('player', i);
    	arrayOfSquares.push($squares);
    }

    $('.main-container').append(arrayOfSquares);

    $('.squares').click(clickedSquare);

    determineStartingPlayer();
}

function determineStartingPlayer() {
	
}

function clickedSquare() {

	console.log('someone clicked me!');

	var $this = $(this)

	$this.text('X');

	$this.data('player', 1)

}

function winEvent() {

	console.log('YOU WIN!!!');

}