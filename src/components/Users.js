import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
    {this.props.users.map(user => <li>{user.username}</li>)}
          
        </ul>
    <p>Total number of users: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);

