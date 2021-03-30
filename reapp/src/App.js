import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Home from './components/Home';
<Form />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/Home"> Home </NavLink>
                </li>
              </ul>

              <ul>
                <li>
                  <NavLink to="/login"> Log in</NavLink>
                </li>
              </ul>

            </nav>
          </header>
          <Switch>

            <Route path="/Home">
              <Home />

            </Route>

            <Route path="/login">
              <Form />
            </Route>
          </Switch>
        </Router>

      </header>
    </div>
  );
}

export default App;
