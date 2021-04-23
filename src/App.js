import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
             <Login/>
          </Route>
          <Route exact path="/home">
              <Home/>
          </Route>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
