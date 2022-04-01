import logo from "./logo.svg";
// import './App.css';
import { Signup } from "./components/signup";
import "./components/signup.css";
import {Login} from "./components/login"


function App() {
  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
