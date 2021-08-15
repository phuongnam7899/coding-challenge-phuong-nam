import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Vaccine, Footer } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className='header'>COVID VACCINE</h1>
        <Navbar />
        <Switch>
          <Route path='/vaccine'>
            <Vaccine/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
