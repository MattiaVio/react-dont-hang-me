var LetterSlots = React.createClass({

	render: function() {
		var secretWord = this.props.value;
		var letters = [];
		var secretWordLength = secretWord.length;

		console.log(secretWord);

		for (var i = 0; i < secretWordLength; i++) {
			letters.push(<LetterSlot key={i} value={secretWord[i]}/>)
		}

		return (
			<div className="container">{letters}</div>
		);
	}

});