import React from 'react';

const Song = ({title, artist, chartPosition, image, preview}) => {
  return(
    <>
    <h3>{chartPosition}. {title}</h3>
    <p>{artist}</p>
    <img src={image}/>
    <audio controls>
      <source src={preview} type="audio/mp3"/>
          <p>Your browser doesn't support HTML5 audio. Here is a <a href={preview}>link to the audio</a> instead.</p>
    </audio>
    </>
  )
}

export default Song
