import React, { Component } from 'react';
import { connect } from 'react-redux'; 


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, idx) => {
            return <li key={idx}>{user.username}</li>
          })}
        </ul>
          <p>{this.props.users.length} Total Users</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
