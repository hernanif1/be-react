import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './pages/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components'

const theme = {
  media: {
    large: '150px'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDom.renders title -> App  -> Header -> Card -> title

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
