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

const colors = [
  "#1A181B",
  "#564D65",
  "#3E8989",
  "#2E282A",
  "#EF3E36"

]

const initialIndex = Math.floor(Math.random() * 5);


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[initialIndex],
      currentAuthor: authors[initialIndex],
      currentIndex: initialIndex
    };
    this.generateQuote = this.generateQuote.bind(this);
    this.generateNewIndex = this.generateNewIndex.bind(this);
  }

  generateNewIndex(previousIndex) {
    let newNumber = previousIndex;
    while(previousIndex === newNumber)
    {
      newNumber = Math.floor(Math.random() * 5)
    }
    return newNumber;
  }

  generateQuote() {
    this.setState({
      currentIndex: this.generateNewIndex(this.state.currentIndex),
      currentQuote: quotes[this.state.currentIndex],
      currentAuthor: authors[this.state.currentIndex]
    }, () => {
      document.body.style.backgroundColor = colors[this.state.currentIndex]
      document.getElementById("quote-box").style.color = colors[this.state.currentIndex];
    });
  }

  componentDidMount = () => {
    document.body.style.backgroundColor = colors[initialIndex];
    document.getElementById("quote-box").style.color = colors[initialIndex];
  }
  
  render() {

    return (
      <div id="quote-box">
        <div id="text" class="text-center">
            <i class="fa fa-quote-left" aria-hidden="true"></i> {this.state.currentQuote} <i class="fa fa-quote-right" aria-hidden="true"></i>
        </div>
        <div class="row">
          <span class="col-sm-7"/>
          <div class="col-sm-5" id="author">
            - {this.state.currentAuthor}
          </div>
        </div>
        <br/>
        <div class="row">
          <span class="col-sm-1"/>
          <button id="new-quote" class="btn btn-primary col-sm-3" onClick={this.generateQuote}>
            New Quote
          </button>
          <span class="col-sm-4"/>
          <a id="tweet-quote" class="btn btn-primary col-sm-3" href={`https://twitter.com/intent/tweet?text=${this.state.currentQuote} - ${this.state.currentAuthor}`} ><i class="fab fa-twitter"/>Tweet this</a>
        </div>
      </div>
    );
  }
};



ReactDOM.render(<App/>, document.getElementById('wrapper'));