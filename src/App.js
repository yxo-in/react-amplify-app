import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello from Amplify!!!! 16082021
          update 1 : test lex : 05092021
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <script src="https://d2f33vy3qg049i.cloudfront.net/lex-web-ui-loader.min.js"></script>
          <script>{`
            var loaderOpts = {
              baseUrl: 'https://d2f33vy3qg049i.cloudfront.net/',
              shouldLoadMinDeps: true
            };
            var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
            loader.load()
              .catch(function (error) { console.error(error); });
            `}</script>

      </header>
    </div>
  );
}

export default App;
