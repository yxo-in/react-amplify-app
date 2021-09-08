var loaderOpts = {
  baseUrl: 'https://d1olhb9k3nup61.cloudfront.net/',
  shouldLoadMinDeps: true
};

`var loader = new ChatBotUiLoader.IframeLoader(loaderOpts);`
`loader.load()
  .catch(function (error) { console.error(error); });`
