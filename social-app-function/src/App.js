import logo from './logo.svg';
import './App.css';

import Posts from './Posts';
import Navbar from './Navbar';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* import { render } from "react-dom"; */
/* import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"; */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <span className="App-logo-container"> <img src={logo} className="App-logo" alt="logo" />
            <p>Social-app </p></span>
            <Navbar />
        </header>
        <Routes>
          <Route>
            <Route path="/" element={<Posts />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
