class App extends React.Component {
	render() {
		return (
			<div>
			<Friend
				name="Coco"
				hobbies={['digging', 'swimming', 'sleeping', 'eating']}
			/>
			<Friend
				name="Dubu"
				hobbies={['looking', 'swimming', 'Cuddling', 'hugging']}
			/>
			<Hello 
				to="Ringo" 
				from="Paul"
				bangs="4"
				img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
			/>
			<p>Slot Machines</p>
			<Machine 
				icon1="😀"
				icon2="🥶"
				icon3="🤡"
			/>

		</div>
		)

	}
}

ReactDOM.render(<App />, document.getElementById('root'));
