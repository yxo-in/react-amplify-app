import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello from Amplify!!!! 
          
        </h1>
        <h3>Activity log</h3>
        
        <a>Initial - 16082021 <br></br> 
        update 1 : test lex : 05092021<br></br> 
        update 2 : test lex : 22092021
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
