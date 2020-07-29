function getMood() {
	const moods = [ 'angry', 'Hungry', 'silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

function getNum () {
	return Math.floor (Math.random() * 10)
}
class NumPicker extends React.Component {
	render () {
		const num = getNum ();
		let msg;
		if(num === 7) {
			msg=<div>
				<h2>Congrats!! you Win</h2>
			</div>
		}
		else { msg=
		<h2>Sorry, you lose!</h2>
		}
		return (
		<div>
			<h1>Your number is {num}</h1>
		<p>{num === 7 ? 'Congrats':'unlucky!'}</p>
		{num === 7 && <img src="https://media3.giphy.com/media/Q81NcsY6YxK7jxnr4v/200.gif" /> }
		{msg}
		</div>
		)
	}
}

