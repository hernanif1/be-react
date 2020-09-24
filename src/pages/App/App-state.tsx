import React, {useState} from 'react';
import './App.css';
import { DELAY } from './App.utils';

// render data
// renders local states <div>..loading</div>
// useEffect() // componentDidMount -
// re-render 

// useEffect( FunctionThatNeedsToBeCalledAfterRenderHtmlELEMENTs, [] )

//hooks react 16.x
function App() {
  var [visible, setVisible] = useState<boolean>(true)
  
  const handleHideShowButton = () => {
    console.log("clicked on handleHideShowButton function")
    setVisible(!visible)
  }
  
  console.log("passed here")
  
  return (
    <div className="App" >
      <button onClick={handleHideShowButton}>Hide/show</button>
      {visible && <div>element</div>}
    </div>
  );
}

export {App};
export {DELAY};

