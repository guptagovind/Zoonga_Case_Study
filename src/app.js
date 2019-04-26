import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Zoonga from './components/Zoonga';

const App = (
  <div>
    <Zoonga/>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
