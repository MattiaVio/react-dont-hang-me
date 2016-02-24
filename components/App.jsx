var App = React.createClass({

	render: function() {
		return (
			<div className="container">
				<h1>Welcome to the Hangman Game</h1>
				<LetterSlots value={secrets['Animal'][Math.floor(Math.random()*secrets['Animal'].length)]}></LetterSlots>
			</div>
		);
	}
});
