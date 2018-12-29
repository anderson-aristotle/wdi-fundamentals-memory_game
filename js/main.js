console.log("Up and running!");
console.log("player flipped queen.");
console.log("player flipped king.");

//array for memory cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//create flipCard function
var flipCard = function () {

	var cardID = this.getAttribute('data-id');
	console.log("User flipped" + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}
var cardID();
console.log("User flipped" + cards[cardID]);

//create variable for the first card flipped
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log ("User flipped" + cardOne);

//create variable to rep the second card flipped
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + cardTwo);

//if statement that checks to see if the length of the cardsInPlay array is 2
if (cardsInPlay [0] === cardsInPlay [2] ) {
	alert('Matched!');
} else {
	alert ('Try again.');
}


