class Hello extends React.Component {
	render() {
	const props = this.props;
	return <p>Hi {props.to} to {props.from}</p>
	}
}

