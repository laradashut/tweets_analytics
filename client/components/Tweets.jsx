import React from 'react';
import { Link } from 'react-router';

//import tweet component


const Tweets = React.createClass({
  render() {
    return (
      <div className='tweets-list'>
        <Link to='/tweets'>Here is the list of stream tweets</Link>
        {this.props.tweets.map((tweet, i) => <Tweet {...this.props} key={i} i={i} post={post} />)}
      </div>

    )
  }
})

export default Tweets;
