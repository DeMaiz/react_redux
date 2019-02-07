import React, { Component } from 'react';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state ={ term: '' };
	}
	render(){
		return (
			<div className="search-bar">
			<input
				value={this.state.term}
			 onChange={input=> this.onInputChange(input)} />
			</div>
			);
	}

	onInputChange(input){
		const term = input.target.value;
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
