class Hello extends React.Component {
	render() {
		let bangs="!".repeat(this.props.bangs)
		console.log(this.props)
	return (
		<div>
		<p>Hi {this.props.to} to {this.props.from}{bangs}</p>

		</div>
	);
	}
}

