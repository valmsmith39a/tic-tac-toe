'use strict';

$(document).ready(init);

function(init) {

$('body').append('<div id=\'testDiv\'>TEST</div>');

$('#testDiv').click(clickedSquare);

}

function clickedSquare() {

	console.log('someone clicked me!');

}

function winEvent() {

	console.log('YOU WIN!!!');

}