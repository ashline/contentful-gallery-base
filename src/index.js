import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from 'components/Main';
import { store } from 'services/store'

// import App from './components/Main'
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

//TODO: big tingz a gwan
const router = (
<Provider store={store}>
  <Router>
    <Route path='/' component={App}/>
  </Router>
</Provider>
)

ReactDOM.render(router, document.getElementById('root'));
