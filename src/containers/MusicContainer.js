import React from 'react';
import MusicDetail from '../components/MusicDetail.js';
import GenreSelector from '../components/GenreSelector.js';

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentGenre: null
    };
    this.handleGenreSelected = this.handleGenreSelected.bind(this);
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    });
    request.send();
  }

  handleGenreSelected(genre){
    const selectedGenre = genre;
    this.setState({currentGenre: selectedGenre})
  }

  render(){
    return (
      <div className="music-container">
        <h1>Top 20 Songs in the UK</h1>
        <GenreSelector songs={this.state.songs} onGenreSelected={this.handleGenreSelected}/>
        <MusicDetail songs={this.state.songs} currentGenre={this.state.currentGenre}/>
      </div>
    );
  }
}

export default MusicContainer;
