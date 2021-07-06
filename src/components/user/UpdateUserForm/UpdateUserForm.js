import React, { Component } from "react";
import "./UpdateUserForm.css";

export default class UpdateUserForm extends Component {
  state = {
    newName: this.props.userName,
  };

  handleOnUpdateSubmit = (e) => {
    e.preventDefault();
    const { newName } = this.state;
    this.props.onUpdateSubmit(newName);
  };

  handleOnChange = (event) => {
    console.log(this.props);
    this.setState({
      newName: event.target.value,
    });
  };

  handleOnClose = () => {
    this.props.onUpdateClose();
  }

  render() {
    return (
      <React.Fragment>
        <div className="UpdateForm">
          <form onSubmit={this.handleOnUpdateSubmit}>
            <div className="card w-25 middle">
              <div className="card-header">
                <h1>Edit User Form</h1>
              </div>

              <div className="card-body">
                <label>Username</label>
                <input className="form-control mt-2" placeholder="Enter new username" value={this.state.newName} onChange={this.handleOnChange} />
              </div>

              <div className="card-footer">
                <div className="d-flex justify-content-center">
                  <input type="submit" className="btn btn-primary me-2" />
                  <input type="button" className="btn btn-danger" value="Close" onClick={this.handleOnClose}/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
