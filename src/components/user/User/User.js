import React from "react";
import PropTypes from "prop-types";
import "./User.css";
import UpdateUserForm from "../UpdateUserForm/UpdateUserForm";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      isShowUpdate: false
    }
  }

  handleOnClick = () => {
    this.props.onDelete(this.props.user.id);
  };

  handleOnUpdateSubmit = (newName) => {
    if(newName != "") {
      this.setState({
        ...this.state,
        user: {
          ...this.state.user,
          name: newName
        },
        isShowUpdate: false
      })
    }
    else {
      alert("You cannot leave empty username")
    }
  }

  handleOnUpdateClose = () => {
    this.setState({
      ...this.state,
      isShowUpdate: false
    })
  }

  handleOnUpdate = () => {
    console.log(this.props);
    this.setState({
      ...this.state,
      isShowUpdate: true,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="User">
          <h6 className="User__name">{this.state.user.name}</h6>
          <div className="User__img">
            <img src={this.state.user.avatar_url} alt={this.state.user.login} />
          </div>
          <div className="User__actions mt-4">
            <button className="btn btn-danger" onClick={this.handleOnClick}>
              Delete
            </button>
            <button className="btn btn-info mt-3" onClick={this.handleOnUpdate}>
              Update
            </button>
          </div>
        </div>
        {this.state.isShowUpdate ? <UpdateUserForm userName={this.props.user.name} onUpdateSubmit={this.handleOnUpdateSubmit} onUpdateClose={this.handleOnUpdateClose}/> : ""}
      </React.Fragment>
    );
  }
}

export const UserType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
});

User.propTypes = {
  user: UserType.isRequired,
  onDelete: PropTypes.func,
};
