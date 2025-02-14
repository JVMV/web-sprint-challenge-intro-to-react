import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here...
const [charData, setCharData] = useState([]);
const [apiErr, setApiErr] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(res => setCharData(res.data))
    .catch(err => setApiErr('*sigh*..Morty....which switch did you toggle?....'))
}, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h3>Morty..we're doing a..*burp*..another StarWars Morty..click a name to learn more</h3>
      {apiErr && <p>{apiErr}</p>}

      {charData !== [] ? charData.map(obj => <Character key={`${obj.name}_${obj.birthyear}`} char={obj} />) : <p>Morty...jeezuz, I'm trying to do a star..*burp*..wars Morty.</p>}
    </div>
  );
}

export default App;
