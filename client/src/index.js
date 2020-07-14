import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';


import Modal from './Modal';

import Navigation from './Navigation';
import Header from './Header';
import * as serviceWorker from './serviceWorker';
import { Link, BrowserRouter } from 'react-router-dom'


ReactDOM.render(
<div>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
  <Navigation logotitle="Kanhaiya Lal"/>
  <Home/>
</div> ,document.getElementById('root')
);

 
serviceWorker.unregister();
