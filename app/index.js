import React from 'react';
import ReactDOM from 'react-dom';


class FirstComponent extends React.Component {
	render() {
		return <div> Hello, {this.props.message} </div>;
	}
}

ReactDOM.render(<FirstComponent message="Ming"/>, document.getElementById('app'));