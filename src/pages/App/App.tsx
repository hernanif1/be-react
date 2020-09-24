import React, {  useState } from 'react';
import './App.css';
import {Beer, beers} from "../../services/beers"
import {ButtonStyled} from "./App.styles"

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
    <div className="App">
      <ButtonStyled  data-testid="button-beer" onClick={handleApiCall}>call on click</ButtonStyled>
      {!data && <p>loading...</p>}
      {data && JSON.stringify(data)}
    </div>
  );
}

export {App};

