import React from 'react';

const GenreSelector = (props) => {

  const genres = [];
  const options = props.songs.map((song, index) => {
    if (!genres.includes(song.category.attributes.label)){
      const genre = song.category.attributes.label
      genres.push(genre)
      return <option value={genre} key={genre}>{genre}</option>

  }
  })

  function handleChange(event) {
    props.onGenreSelected(event.target.value)
  }

  return(
    <select id="genre-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a genre...</option>
      {options}
      </select>
  )
}

export default GenreSelector;
