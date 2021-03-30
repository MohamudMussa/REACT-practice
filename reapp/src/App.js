import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink to="/"> <Home /> </NavLink>
              </li>
            </ul>





          </nav>



        </Router>

      </header>
    </div>
  );
}

export default App;
