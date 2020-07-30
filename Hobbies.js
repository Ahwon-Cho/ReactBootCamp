class Friend extends React.Component {
    render () {
        const {name, hobbies} = this.props;
        console.log(this.props);

    return (
        <div>
        <p>I have a Friend</p>
        <h1>name is {name}</h1>
        <ul>
    {hobbies.map(h => <li>{h}</li>)}
        </ul>

        </div>
    )
    }
}