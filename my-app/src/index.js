import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.scss';

const quotes = [
  'Envy of other people shows how they are unhappy. Their continual attention to others behavior shows how they are boring.',
  'There will come a time when you believe everything is finished. That will be the beginning.',
  'Life is not a problem to be solved but a reality to be experienced.',
  'It is easier to forgive an enemy than to forgive a friend.',
  'If you would hit the mark, you must aim a little above it: Every arrow that flies feels the attraction of earth.'
];

const authors = [
  'Seneca',
  'Louis L’Amour',
  'Søren Kierkegaard',
  'William Blake',
  'Henry Wadsworth Longfellow'
];

const initialIndex = Math.floor(Math.random() * 5);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[initialIndex],
      currentAuthor: authors[initialIndex],
      currentIndex: 0
    };
    this.generateQuote = this.generateQuote.bind(this);
  }

  generateQuote() {
    this.setState({
      currentIndex: Math.floor(Math.random() * 5),
      currentQuote: quotes[this.state.currentIndex],
      currentAuthor: authors[this.state.currentIndex]
    });
  }

  render() {

    return (
      <div id="quote-box">
        <div id="text">
          <h1 class="text-center">
            {this.state.currentQuote}
          </h1>
          <div class="text-center" id="author">
            {this.state.currentAuthor}
          </div>
          <button id="new-quote" onClick={this.generateQuote}>
            New Quote
          </button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${this.state.currentQuote} - ${this.state.currentAuthor}`} >Tweet this</a>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('wrapper'));