class App extends React.Component {
	render() {
		return (
			<div>
			<Hello to="Ringo" from="Paul"/>
			<Hello to="Ahwon" from="S"/>
		</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('root'));