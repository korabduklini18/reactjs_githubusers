import React from "react";

export default class AddUserForm extends React.Component {
  state = {
    username: "",
  };


  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { username } = this.state;

    if (!username) {
      return;
    }

    this.props.onSubmit(username);

  };

  render() {
    return ( 
      <div className="AddUserForm mb-5">
        <form onSubmit={this.handleOnSubmit}>
          <div className="row g-3">
            <div className="col-sm-4">
              <input type="text" name="username" className="form-control" placeholder="Search github user" value={this.state.username} onChange={this.handleOnChange}
              />
            </div>
            <div className="col-sm d-flex align-items-center">
              <button type="submit" disabled={this.props.isSearching} className="btn btn-primary" disabled={this.props.isSearching}>
                {" "}
                Add user
              </button>
              <img src="../../../loader.gif" className={this.props.isSearching ? "" : "d-none"} width="50" height="50"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
