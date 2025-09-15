import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* The basename prop tells the router that the app is served from a sub-directory.
        This matches the "homepage" field in your package.json.
      */}
      <Router basename="/EventForage">
          <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

