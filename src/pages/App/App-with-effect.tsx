import React from 'react';
import './App.css';
import { useBeers } from './App.hooks';

function App() {
  const { beers, callBeers} = useBeers()
 /// beers, //undefined
  // callBeers //() => { setCallAPI(true) }
  return (
    <div className="App" >
      <button onClick={() => callBeers()}>call on click</button>
      {!beers && <p>waiting...</p>}
      {beers && JSON.stringify(beers)}
    </div>
  );
}

export {App};

