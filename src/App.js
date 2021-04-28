import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Nav from './components/Nav';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import Series from './components/Series';
import SeriesDetail from './components/SeriesDetail';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';


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
          <Route exact path="/detail/:id">
              <Detail/>
          </Route>
          <Route exact path="/series">
              <Series/>
          </Route>
          <Route exact path="/series-detail/:id">
              <SeriesDetail />
          </Route>
          <Route exact path="/movies/:selector">
              <Movies />
          </Route>
          <Route exact path="/movie-detail/:id">
              <MovieDetail />
          </Route>
        </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
