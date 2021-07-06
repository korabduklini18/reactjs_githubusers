import React, { Component } from "react";
import staticUsers from "./data";
import ListUsers from "./components/user/ListUsers/ListUsers";
import AddUserForm from "./components/user/AddUserForm/AddUserForm";
import UpdateUserForm from "./components/user/UpdateUserForm/UpdateUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUsers: [],
      staticUsers: staticUsers,
      isSearching: false,
    };
  }

  handleOnSubmit = async (username) => {
    this.setState({...this.state, isSearching: true});
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const userJsonData = await res.json();
      const { githubUsers } = this.state;

      for (let i = 0; i < githubUsers.length; i++) {
        var isAlreadyExist = false;
        if(githubUsers[i].id != userJsonData.id) {
          continue;
        }
        else {
          isAlreadyExist = true;
          break;
        }
      }

      if(!isAlreadyExist && userJsonData.message != "Not Found") {
        this.setState({
          ...this.state,
          githubUsers: [
            ...this.state.githubUsers,
            {
              id: userJsonData.id,
              name: userJsonData.name,
              login: userJsonData.login,
              avatar_url: userJsonData.avatar_url,
            },
          ],
        });
      }

      else if(userJsonData.message == "Not Found"){
       alert("This GitHub user is not found");
      }

      else {
       alert("This GitHub user already exist");
      }

    } catch (e) {
      console.log(e);
    }
    this.setState({...this.state, isSearching: false});
  };

  handleOnDelete = (userId) => {
    this.setState({
      ...this.state,
      githubUsers: this.state.githubUsers.filter((user) => user.id !== userId),
    });
  };

  render() {
    const { staticUsers, githubUsers } = this.state;

    return (
      <div className="App container">
        <AddUserForm onSubmit={this.handleOnSubmit} isSearching={this.state.isSearching}/>
        <ListUsers
          title="Github users"
          users={githubUsers}
          onDelete={this.handleOnDelete}
          OnUpdateSubmit={this.handleOnUpdateSubmit}

        />
        <ListUsers
          title="Static users"
          users={staticUsers}
          onDelete={this.handleOnDelete}
        />
        <ListUsers title="Empty list" />
      </div>
    );
  }
}
export default App;

// components:
// User
// AddUser
// ListUsers
