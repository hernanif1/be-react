import React, {  useState } from 'react';
import './App.css';
import {Beer, beers} from "../../services/beers"

function App() {
  const [data, setData] = useState<Beer[]>()

  // useEffect(()=>{
  //     axios.get<Beer[]>("https://api.punkapi.com/v2/beers").then(
  //     result => { setData(result.data) }
  //   )
  // }, []) 

  const handleApiCall = async  ()=> {
    console.log('passed here')
    const {data} = await beers
    setData(data)
  }

  return (
    <div className="App" >
      <button data-testid="button-beer" onClick={handleApiCall}>call on click</button>
      {!data && <p>loading...</p>}
      {data && JSON.stringify(data)}
    </div>
  );
}

export {App};

