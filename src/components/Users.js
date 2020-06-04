import React, { Component } from 'react';
import { connect } from 'react-redux'
// import UserInput from './UserInput';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, ind) => <li key={ind}>{user.username}</li>)
    return (
      <div>
        <p>Number of users:{this.props.users.length}</p>
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
