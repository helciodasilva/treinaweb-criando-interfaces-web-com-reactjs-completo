import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Home from './Home';
import About from './About';

ReactDOM.render(
    <Router>
        <div>
            <App />

            <Route exact path="/" component={Home}/>
            <Route path="/about/:minhaVariavel" component={About}/>
        </div>
    </Router>,
     document.getElementById('root')
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
