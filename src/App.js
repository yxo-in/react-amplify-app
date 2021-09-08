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
        update 1 : test lex : 05092021
        </a>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Helmet>
        <script src="https://d1olhb9k3nup61.cloudfront.net/lex-web-ui-loader.min.js"></script>
          <script> 
            var loaderOpts = {
              `baseUrl: 'https://d1olhb9k3nup61.cloudfront.net/',
              shouldLoadMinDeps: true`
            };
            var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
            loader.load()
              .catch(function (error) { console.error(error); });
          </script>
  
        </Helmet>

      </header>
    </div>
  );
}

export default App;
