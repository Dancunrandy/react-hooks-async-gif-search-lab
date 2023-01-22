import React from 'react';

const GifList = (props) => {
  const gifs = props.gifs.map(gif => {
    return (
      <li key={gif.id}>
        <img src={gif.images.original.url} alt={gif.slug}/>
      </li>
    );
  });

  return (
    <ul>
      {gifs}
    </ul>
  );
}

export default GifList;
