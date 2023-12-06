import React, { useState } from 'react';

export default function MainPage({ path }) {
  // const [name, setName] = useState('default name');
  // const [imgSource, setImgSource] = useState(null);
  const [character, setCharacter] = useState(null);

  const handleClick = async () => {
    const randomId = Math.ceil(Math.random() * 100);
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
    const data = await response.json();
    setCharacter(data);
    // setName(data.name);
    // setName((prev) => `${prev}1`);
    // setName((prev) => `${prev}2`);
    // setName((prev) => `${prev}3`);
    // setImgSource(data.image);
    // console.log('name: ', name);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>
            MainPage
          </h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-xs-3">
          <button onClick={handleClick} type="button" className="btn btn-primary">{character ? 'Next' : 'Click me!'}</button>
        </div>
      </div>
      {character && (
      <div className="row justify-content-center align-items-center">
        <div className="col-xs-12">
          <img src={character.image} alt={character.name} />
        </div>
        <div className="col-xs-3">
          {character.name}
        </div>
      </div>
      )}
    </div>
  );
}
