class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="quote-box">
        <div id="text">
          <h1 class="text-center">
            Placeholder Text for Quotes
          </h1>
          <div class="text-center" id="author">
            Placeholder for Author
          </div>
          <button id="new-quote">
            New Quote
          </button>
          <a id="tweet-quote">Tweet this</a>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('wrapper'));