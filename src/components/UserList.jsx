import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.renderUser = this.renderUser.bind(this);
  }

  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <article key={ user.name } className="card card-block">
        <h4 className="card-title">{ user.name }</h4>
        <p className="card-text">{ user.company.name }</p>
        <a className="btn btn-primary" href={ user.website }>Website</a>
      </article>
    );
  }

  render() {
    return (
      <section className="user-list">
        { this.props.users.map(this.renderUser) }
      </section>
    );
  }

}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps, actions)(UserList);
