import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App';


import { CssBaseline } from '@mui/material';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);