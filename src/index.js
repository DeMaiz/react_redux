import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import SearchBar from './components/search_bar';

import YTAPISearch from 'youtube-api-search';

import VideoList from './components/video_list';

import VideoDetail from './components/video_details';

const YOUTUBE_API_KEY = "AIzaSyC5lsf4aCFgkFruPM2n9JDIyzVspcMijIs";



class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			selectedVideo: null
		 };
		this.youtubeSearch("surfboard");
	}

	youtubeSearch(term){
		console.log("Youtube search starts.......");
		YTAPISearch({
			key: YOUTUBE_API_KEY,
			term: term,
		},videos => this.setState({
			videos:videos,
			selectedVideo: videos[0]
		}));
	}
	render(){
		const videoSearch = _.debounce(term=>{this.youtubeSearch(term)},300)
		return (
			<div>
				<SearchBar
				 onSearchTermChange={videoSearch}/>

				<VideoDetail video={this.state.selectedVideo}/>

				<VideoList
				onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
			);
	}
}



ReactDOM.render(<App/>,document.querySelector(".container"));
