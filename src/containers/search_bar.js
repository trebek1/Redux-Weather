import React, { Component } from 'react';
import Connect from 'react-redux';

export default class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {term: ''};
	}


	onInputChange(event){
		this.setState({
			term: event.target.value
		});
	}

	onFormSubmit(event){
		event.preventDefault(); 
		//do whatever 
		this.setState({
			term: ""
		})
	}


	render () {
		return (
				<form className="input-group" onSubmit={(event) => {this.onFormSubmit(event)}}>
					<input 
					placeholder="Get your five day forecast in your favorite cities"
					className="form-control"
					value = {this.state.term}
					onChange={(event) => this.onInputChange(event)}/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary"> Sumbmit </button>
					</span>
				</form>
			)
	}


}

//connect()(SearchBar)

