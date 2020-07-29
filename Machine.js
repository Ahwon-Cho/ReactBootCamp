class Machine extends React.Component {
    render (){

        const {icon1,icon2,icon3} = this.props;
        const winner = (icon1 === icon2) && (icon2 ===icon3);
        return (
            <div>
                <p>Hi from machine</p>
                <p>{icon1}{icon2}{icon3}</p>
                <p>{winner ? 'WINNER' : 'loser....'}</p>
            </div>
        );
    }
}