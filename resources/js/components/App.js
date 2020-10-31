import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';

  

class App extends Component {
    state = { 
        PUBLIC_URL: "/myTasks/",
     };
    render() { 
        return (  
            <Router>
                <Header />                    
                <Switch>
                    <Route exact path={`${this.state.PUBLIC_URL}`}>
                        <Home />
                    </Route>
                    <Route path={`${this.state.PUBLIC_URL}about`}>
                        <About />
                    </Route>  
                    <Route path={`${this.state.PUBLIC_URL}contact`}>
                        <Contact />
                    </Route>                                         
                </Switch>                
                <Footer />
            </Router>
        );
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
