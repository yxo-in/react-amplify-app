import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

<script src="https://d1olhb9k3nup61.cloudfront.net/lex-web-ui-loader.min.js"></script>
<script>
  var loaderOpts = {
    baseUrl: 'https://d1olhb9k3nup61.cloudfront.net/',
    shouldLoadMinDeps: true
  };
  var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);
  loader.load()
    .catch(function (error) { console.error(error); });
</script>