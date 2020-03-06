import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const quoteList = this.props.quotes.map((quote) => {
      return <QuoteCard 
        key={quote.id} 
        quote={quote} 
        upvoteQuote={this.props.upvoteQuote} 
        downvoteQuote={this.props.downvoteQuote} 
        removeQuote={this.props.removeQuote} 
      />
    })
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quoteList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps  = (state) => {
  return {
    quotes: state.quotes
  }
}

export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
