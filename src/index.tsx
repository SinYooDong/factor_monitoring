import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import simulator from "./simulator";
import portfolio from "./portfolio";
import Navbar from "./components/Navbar";
import Index2 from "./index2";

ReactDOM.render(<Router>
    <Navbar />
    <Route path="/" exact component={Index2} />
    <Route path="/simulator" exact component={simulator} />
    <Route path="/portfolio" exact component={portfolio} />
    <Route path="/index2" exact component={App} />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
