import React from 'react';
import ReactDOM from 'react-dom/client';
import { Shell } from './Shell.jsx';
import './styles/tokens.css';
import './styles/app.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Shell />
  </React.StrictMode>
);
