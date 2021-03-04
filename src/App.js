import './App.css';
import './custom.css'
import {Link, Route} from 'react-router-dom';
import Home from './components/Home';
import Dogs from './components/Dogs';
import DogsDetail from './components/DogsDetail';
import RandomCat from './components/RandomCat';


function App() {
  return (
    <div className = "App">
      <div className="page-container">
          <nav className = "Navbar">
            <li>
              <Link exact to="/">Home</Link>
            </li>

            <li>
              <Link to="/Dogs">Dogs</Link>
            </li>


            <li>
              <Link to="/Randomcat">Random Cat</Link>
            </li>
          </nav>
          <div className="content-wrap">
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/Dogs" component={Dogs} />
              <Route path="/Dogsdetail" component={DogsDetail} />
              <Route path="/Randomcat" component={RandomCat} />
            </main>
            <footer className="footer">
              <p>Copyight &#169; Naeem Shafi 2021</p>
            </footer>
          </div>
      </div>
    </div>
      
    
  );
}

export default App;
