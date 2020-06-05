import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    const users = this.props.users.map(user => {
      return <li>{user.username} - {user.hometown}</li>
    })

    return (
      <div>
        <ul>
          Users! <br />
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.length} users
          { users }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)