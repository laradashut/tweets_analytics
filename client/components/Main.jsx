import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
  render() {
    return (
      <div >
        <Link to='/'>Hello</Link>
      </div>
      {React.cloneElement(this.props.children. this.props)}
    )
  }
})

export default Main;
