import React, { Component } from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state ={ term: 'default value' };
	}
	render(){
		return (
			<div>
			<input
				value={this.state.term}
			 onChange={input=> this.setState({term: input.target.value})} />
			</div>
			);
	}
}

export default SearchBar;