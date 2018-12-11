import React from 'react';
import Song from './Song.js'

const MusicDetail = ({songs, currentGenre}) => {
  console.log("current genre", currentGenre);
 if (currentGenre == null) {
    const musicNodes = songs.map((song, index) => {
      return <Song key={song.id.attributes["im:id"]} title={song["im:name"].label} artist={song["im:artist"].label} chartPosition={index + 1} image={song["im:image"][2].label} preview={song.link[1].attributes.href}/>
    });

    return(
      <ul className="music-list">
        {musicNodes}
      </ul>
    )
  } else {
      const musicNodes = songs.map((song, index) => {
        if (currentGenre === song.category.attributes.label){
          return <Song key={song.id.attributes["im:id"]} title={song["im:name"].label} artist={song["im:artist"].label} chartPosition={index + 1} image={song["im:image"][2].label} preview={song.link[1].attributes.href}/>
        }
      });
      return(
        <ul className="music-list">
          {musicNodes}
        </ul>
      )
    }


}

export default MusicDetail;
