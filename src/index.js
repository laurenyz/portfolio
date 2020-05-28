import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './assets/material_ui_theme'
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme = {theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
