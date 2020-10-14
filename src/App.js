import React from 'react';

// import { history } from '../src/utils/history';
import Header from './components/navbar/navbar';
// import { Router, Route } from 'react-router';


function App() {
    return (
        <div id="app">
            <Header />
            {/* <Router history={history}>
                <Route path={"/"} exact component={LandingPage} />
                <Route path={'/login'} />
                <Route path={'/signup'} />
                <Route path={'/home'} />
            </Router> */}
        </div>
    )
}

export default App;