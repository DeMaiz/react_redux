import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

import YTAPISearch from 'youtube-api-search';

import VideoList from './components/video_list';

const YOUTUBE_API_KEY = "AIzaSyC5lsf4aCFgkFruPM2n9JDIyzVspcMijIs";



class App extends Component{
	constructor(props){
		super(props);
		this.state = { videos:[] };
		this.youtubeSearch();
	}

	youtubeSearch(){
		console.log("Youtube search starts.......");
		YTAPISearch({
			key: YOUTUBE_API_KEY,
			term: 'surfboard'
		},videos => this.setState({videos}));
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
			);
	}
}



ReactDOM.render(<App/>,document.querySelector(".container"));

