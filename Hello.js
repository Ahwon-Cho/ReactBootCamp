class Hello extends React.Component {
	render() {
		let bangs="!".repeat(this.props.bangs)

	return (
		<div>
		<p>Hi {this.props.to} to {this.props.from}{bangs}</p>

		</div>
	);
	}
}

