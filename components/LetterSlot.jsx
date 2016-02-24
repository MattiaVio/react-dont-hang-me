var LetterSlot = React.createClass({

	render: function() {
		return (
			<input type="text" 
					onChange={this.handleInput} 
					hiddenValue={this.props.key} 
					size="1" 
					maxLength="1"></input>
		);
	},
	
	handleInput: function(event) {
		if (event.target.value == this.props.value) {
			return (
				this.letterDoMatch()
			)
		} else {
			return (
				this.letterDoesntMatch()
			)
		};
	},

	letterDoMatch: function() {
		return (
			console.log('letterDoMatch')
		);
	},

	letterDoesntMatch: function() {
		return (
			console.log('letterDoesntMatch')
		);
	}
});